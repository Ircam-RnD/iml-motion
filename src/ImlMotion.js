import * as Xmm from 'xmm-client';

const docVersion = '1.0.0';

class ImlMotion {
  constructor(type) {
    // RapidMix config object
    this.config = null;
    this.apiEndPoint = 'como.ircam.fr/api';
  }

  /**
   * @param {JSON} trainingSet - RapidMix compliant JSON
   *
   * @return {Promise} - resolve on the train model (allow async / ajax)
   */
  train(trainingSet) {
    // REST request / response - RapidMix
  }

  /**
   * @param {Float32Array|Array} vector - input vector for decoding
   * @return {Object} 
   */
  run(vector) {

  }

  /**
   * @param {Object} config - RapidMix configuration object or payload
   * // configuration ?
   */
  setConfig(config) {
    if (!config.docType) {
      config = {
        docType: 'rapid-mix:configuration',
        docVersion: docVersion,
        payload: Object.assign({}, defaultConfig, config),
      };
    }
    // ...    

    this.config = rapidMixConfigObject  
  }

  /**
   * @return {Object} - RapidMix Configuration object
   */
  getConfig() {
    return this.config; // 
  }

  /**
   * @param {Object} model - RapidMix Model object
   */
  setModel(model) {

  }

  /**
   * @return {Object} - current RapidMix Model object
   */
  getModel() {

  }
}

export default ImlMotion;
