import * as lfo from 'waves-lfo/client';
import * as controllers from '@ircam/basic-controllers'
import { ProcessedSensors } from 'mano-js';

const processedSensors = new ProcessedSensors();

const eventIn = new lfo.source.EventIn({
  frameRate: processedSensors.frameRate,
  frameSize: 11,
  frameType: 'vector',
});

const onOff = new lfo.operator.OnOff({ state: 'on' });
const socketSend = new lfo.sink.SocketSend({ port: 5000 });
const logger = new lfo.sink.Logger({ time: false, data: true });

eventIn.connect(onOff);
// eventIn.connect(logger);
onOff.connect(socketSend);

Promise.all([eventIn.init(), processedSensors.init()])
  .then(() => {
    console.log(processedSensors);
    processedSensors.addListener(frame => {
      // console.log(frame);
      eventIn.process(null, frame);
    });
    // start graphs
    processedSensors.start();
    eventIn.start();
  })
  .catch(err => console.error(err.stack));

// ---------------------------------------------------------------
// CONTROLS
// ---------------------------------------------------------------

const toggleStream = new controllers.Toggle({
  label: 'On / Off',
  active: true,
  container: '#controls',
  callback: value => {
    if (value)
      onOff.setState('on');
    else
      onOff.setState('off');
  }
});
