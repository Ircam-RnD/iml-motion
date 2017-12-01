import 'source-map-support/register'; // enable sourcemaps in node
import http from 'http';
import path from 'path';
import chalk from 'chalk';
import connect from 'connect';
import connectRoute from 'connect-route';
import bodyParser from 'body-parser';
import serveStatic from 'serve-static';
import serveFavicon from 'serve-favicon';
import rapidMixAdapters from 'rapid-mix-adapters';
import xmm from 'xmm-node';

const port = 3000;


/**
 * instanciate a `xmm` instance for each alogrithm
 */
const xmms = {
  'xmm:gmm': new xmm('gmm'),
  'xmm:hhmm': new xmm('hhmm'),
};

/**
 * open a 'POST' route for the training. The route should correspond to the
 * `url` parameter passed to `mano.XmmProcessor`
 *
 * @example
 * // cf. src/client/index.js
 * const xmmProcessor = new mano.XmmProcessor({ url: '/train' });
 */
function train(req, res) {
  // convert configuration and `TrainingSet` from RAPID-MIX to XMM formalisms
  const xmmConfig = rapidMixAdapters.rapidMixToXmmConfig(req.body.configuration);
  const xmmTrainingSet = rapidMixAdapters.rapidMixToXmmTrainingSet(req.body.trainingSet);

  // find which instance of XMM should be used ('gmm' or  'hhmm')
  const target = req.body.configuration.target.name;
  console.log(target);
  const xmm = xmms[target];

  xmm.setConfig(xmmConfig);
  xmm.setTrainingSet(xmmTrainingSet);
  xmm.train((err, model) => {
    if (err)
      console.error(err.stack);

    // create a RAPID-MIX JSON compliant response
    const rapidMixModel = rapidMixAdapters.xmmToRapidMixModel(model);
    const rapidMixHttpResponse = {
      docType: 'rapid-mix:ml:http-response',
      docVersion: '1.0.0',
      model: rapidMixModel,
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rapidMixHttpResponse));
  });
}


/**
 * Server boilerplate code
 */
const app = connect();
app.use(serveFavicon('./public/favicon.ico'));
app.use(serveStatic('./public'));
app.use(bodyParser.json());
// client-side `xmmProcessor` create an Ajax request with POST method
app.use(connectRoute(router => router.post('/train', train)));

const server = http.createServer(app);
server.listen(port, () => console.log(chalk.cyan(`server started: http://127.0.0.1:${port}`)));
