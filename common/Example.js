'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _from=require('babel-runtime/core-js/array/from');var _from2=_interopRequireDefault(_from);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _rapidMixAdapters=require('rapid-mix-adapters');var _rapidMixAdapters2=_interopRequireDefault(_rapidMixAdapters);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// source : https://stackoverflow.com/questions/15251879/how-to-check-if-a-variable-is-a-typed-array-in-javascript
var isArray=function isArray(v){return v.constructor===Float32Array||v.constructor===Float64Array||Array.isArray(v);};/**
 * Class that represents a training example (e.g. time serie of vectors
 * that represents a gesture).
 * If no parameters are given, the dimensions will be guessed from the first
 * added element after instantiation of the class and after each call to clear.
 * If parameters are given, they will be used to strictly check any new element,
 * anytime.
 *
 * @param {Number} [inputDimension=null] - If defined, definitive input dimension
 *    that will be checked to validate any new element added.
 * @param {Number} [outputDimension=null] - If defined, definitive output dimension
 *    that will be checked to validate any new element added.
 *
 * @example
 * import * as mano from 'mano-js/client';
 *
 * const example = new mano.Example();
 * const trainingSet = new mano.TrainingSet();
 *
 * example.setLabel('test');
 * example.addElement([0, 1, 2, 3]);
 * const rapidMixJsonExample = example.toJSON();
 *
 * trainingSet.addExample(rapidMixJsonExample);
 */var Example=function(){function Example(){var inputDimension=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var outputDimension=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;(0,_classCallCheck3.default)(this,Example);if(inputDimension!==null){this.fixedDimensions=true;this.inputDimension=inputDimension;this.outputDimension=outputDimension!==null?outputDimension:0;}else{this.fixedDimensions=false;}this.label=_rapidMixAdapters2.default.RAPID_MIX_DEFAULT_LABEL;this.clear();this.addElement=this.addElement.bind(this);}/**
   * Clear the internal variables so that we are ready to record a new example.
   */(0,_createClass3.default)(Example,[{key:'clear',value:function clear(){if(!this.fixedDimensions){this.inputDimension=null;this.outputDimension=null;}this.input=[];this.output=[];}/**
   * Set the example's current label.
   *
   * @param {String} label - The new label to assign to the class.
   */},{key:'setLabel',value:function setLabel(label){this.label=label;}/**
   * Add an element to the current example.
   *
   * @param {Array.Number|Float32Array|Float64Array} inputVector - The input
   * part of the element to add.
   * @param {Array.Number|Float32Array|Float64Array} [outputVector=null] - The
   * output part of the element to add.
   *
   * @throws An error if inputVector or outputVector dimensions mismatch.
   */},{key:'addElement',value:function addElement(inputVector){var outputVector=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;this._validateInputAndUpdateDimensions(inputVector,outputVector);if(inputVector instanceof Float32Array||inputVector instanceof Float64Array)inputVector=(0,_from2.default)(inputVector);if(outputVector instanceof Float32Array||outputVector instanceof Float64Array)outputVector=(0,_from2.default)(outputVector);this.input.push(inputVector);if(this.outputDimension>0)this.output.push(outputVector);}/**
   * Get the example in RapidMix JSON format.
   *
   * @returns {Object} A RapidMix compliant example object.
   */},{key:'toJSON',value:function toJSON(){return{docType:'rapid-mix:ml-example',docVersion:_rapidMixAdapters2.default.RAPID_MIX_DOC_VERSION,payload:{label:this.label,// inputDimension: this.inputDimension,
// outputDimension: this.outputDimension,
input:this.input.slice(0),output:this.output.slice(0)}};}/** @private */},{key:'_validateInputAndUpdateDimensions',value:function _validateInputAndUpdateDimensions(inputVector,outputVector){if(!isArray(inputVector)||outputVector&&!isArray(outputVector)){throw new Error('inputVector and outputVector must be arrays');}if(!this.inputDimension||!this.outputDimension){this.inputDimension=inputVector.length;this.outputDimension=outputVector?outputVector.length:0;// this._empty = false;
}else if(inputVector.length!=this.inputDimension||outputVector.length!=this.outputDimension){throw new Error('dimensions mismatch');}}}]);return Example;}();exports.default=Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImlzQXJyYXkiLCJ2IiwiY29uc3RydWN0b3IiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJBcnJheSIsIkV4YW1wbGUiLCJpbnB1dERpbWVuc2lvbiIsIm91dHB1dERpbWVuc2lvbiIsImZpeGVkRGltZW5zaW9ucyIsImxhYmVsIiwiUkFQSURfTUlYX0RFRkFVTFRfTEFCRUwiLCJjbGVhciIsImFkZEVsZW1lbnQiLCJiaW5kIiwiaW5wdXQiLCJvdXRwdXQiLCJpbnB1dFZlY3RvciIsIm91dHB1dFZlY3RvciIsIl92YWxpZGF0ZUlucHV0QW5kVXBkYXRlRGltZW5zaW9ucyIsInB1c2giLCJkb2NUeXBlIiwiZG9jVmVyc2lvbiIsIlJBUElEX01JWF9ET0NfVkVSU0lPTiIsInBheWxvYWQiLCJzbGljZSIsIkVycm9yIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiK1pBQUEsb0Qsb0pBRUE7QUFDQSxHQUFNQSxTQUFVLFFBQVZBLFFBQVUsR0FBSyxDQUNuQixNQUFPQyxHQUFFQyxXQUFGLEdBQWtCQyxZQUFsQixFQUNBRixFQUFFQyxXQUFGLEdBQWtCRSxZQURsQixFQUVBQyxNQUFNTCxPQUFOLENBQWNDLENBQWQsQ0FGUCxDQUdELENBSkQsQ0FNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BeUJNSyxRLFlBQ0osa0JBQTJELElBQS9DQyxlQUErQywyREFBOUIsSUFBOEIsSUFBeEJDLGdCQUF3QiwyREFBTixJQUFNLDRDQUN6RCxHQUFJRCxpQkFBbUIsSUFBdkIsQ0FBNkIsQ0FDM0IsS0FBS0UsZUFBTCxDQUF1QixJQUF2QixDQUNBLEtBQUtGLGNBQUwsQ0FBc0JBLGNBQXRCLENBQ0EsS0FBS0MsZUFBTCxDQUF1QkEsa0JBQW9CLElBQXBCLENBQTJCQSxlQUEzQixDQUE2QyxDQUFwRSxDQUNELENBSkQsSUFJTyxDQUNMLEtBQUtDLGVBQUwsQ0FBdUIsS0FBdkIsQ0FDRCxDQUVELEtBQUtDLEtBQUwsQ0FBYSwyQkFBaUJDLHVCQUE5QixDQUNBLEtBQUtDLEtBQUwsR0FFQSxLQUFLQyxVQUFMLENBQWtCLEtBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQWxCLENBQ0QsQ0FFRDs7MkVBR1EsQ0FDTixHQUFJLENBQUMsS0FBS0wsZUFBVixDQUEyQixDQUN6QixLQUFLRixjQUFMLENBQXNCLElBQXRCLENBQ0EsS0FBS0MsZUFBTCxDQUF1QixJQUF2QixDQUNELENBRUQsS0FBS08sS0FBTCxDQUFhLEVBQWIsQ0FDQSxLQUFLQyxNQUFMLENBQWMsRUFBZCxDQUNELENBRUQ7Ozs7K0NBS1NOLEssQ0FBTyxDQUNkLEtBQUtBLEtBQUwsQ0FBYUEsS0FBYixDQUNELENBRUQ7Ozs7Ozs7OzttREFVV08sVyxDQUFrQyxJQUFyQkMsYUFBcUIsMkRBQU4sSUFBTSxDQUMzQyxLQUFLQyxpQ0FBTCxDQUF1Q0YsV0FBdkMsQ0FBb0RDLFlBQXBELEVBRUEsR0FBSUQsc0JBQXVCZCxhQUF2QixFQUNBYyxzQkFBdUJiLGFBRDNCLENBRUVhLFlBQWMsbUJBQVdBLFdBQVgsQ0FBZCxDQUVGLEdBQUlDLHVCQUF3QmYsYUFBeEIsRUFDQWUsdUJBQXdCZCxhQUQ1QixDQUVFYyxhQUFlLG1CQUFXQSxZQUFYLENBQWYsQ0FFRixLQUFLSCxLQUFMLENBQVdLLElBQVgsQ0FBZ0JILFdBQWhCLEVBRUEsR0FBSSxLQUFLVCxlQUFMLENBQXVCLENBQTNCLENBQ0UsS0FBS1EsTUFBTCxDQUFZSSxJQUFaLENBQWlCRixZQUFqQixFQUNILENBRUQ7Ozs7NENBS1MsQ0FDUCxNQUFPLENBQ0xHLFFBQVMsc0JBREosQ0FFTEMsV0FBWSwyQkFBaUJDLHFCQUZ4QixDQUdMQyxRQUFTLENBQ1BkLE1BQU8sS0FBS0EsS0FETCxDQUVQO0FBQ0E7QUFDQUssTUFBTyxLQUFLQSxLQUFMLENBQVdVLEtBQVgsQ0FBaUIsQ0FBakIsQ0FKQSxDQUtQVCxPQUFRLEtBQUtBLE1BQUwsQ0FBWVMsS0FBWixDQUFrQixDQUFsQixDQUxELENBSEosQ0FBUCxDQVdELENBRUQsZSw0RkFDa0NSLFcsQ0FBYUMsWSxDQUFjLENBQzNELEdBQUksQ0FBQ2xCLFFBQVFpQixXQUFSLENBQUQsRUFBMEJDLGNBQWdCLENBQUNsQixRQUFRa0IsWUFBUixDQUEvQyxDQUF1RSxDQUNyRSxLQUFNLElBQUlRLE1BQUosQ0FBVSw2Q0FBVixDQUFOLENBQ0QsQ0FFRCxHQUFJLENBQUMsS0FBS25CLGNBQU4sRUFBd0IsQ0FBQyxLQUFLQyxlQUFsQyxDQUFtRCxDQUNqRCxLQUFLRCxjQUFMLENBQXNCVSxZQUFZVSxNQUFsQyxDQUNBLEtBQUtuQixlQUFMLENBQXVCVSxhQUFlQSxhQUFhUyxNQUE1QixDQUFxQyxDQUE1RCxDQUNBO0FBQ0QsQ0FKRCxJQUlPLElBQUlWLFlBQVlVLE1BQVosRUFBc0IsS0FBS3BCLGNBQTNCLEVBQ0RXLGFBQWFTLE1BQWIsRUFBdUIsS0FBS25CLGVBRC9CLENBQ2dELENBQ3JELEtBQU0sSUFBSWtCLE1BQUosQ0FBVSxxQkFBVixDQUFOLENBQ0QsQ0FDRixDLHVDQUdZcEIsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByYXBpZE1peEFkYXB0ZXJzIGZyb20gJ3JhcGlkLW1peC1hZGFwdGVycyc7XG5cbi8vIHNvdXJjZSA6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1MjUxODc5L2hvdy10by1jaGVjay1pZi1hLXZhcmlhYmxlLWlzLWEtdHlwZWQtYXJyYXktaW4tamF2YXNjcmlwdFxuY29uc3QgaXNBcnJheSA9IHYgPT4ge1xuICByZXR1cm4gdi5jb25zdHJ1Y3RvciA9PT0gRmxvYXQzMkFycmF5IHx8XG4gICAgICAgICB2LmNvbnN0cnVjdG9yID09PSBGbG9hdDY0QXJyYXkgfHxcbiAgICAgICAgIEFycmF5LmlzQXJyYXkodik7XG59O1xuXG4vKipcbiAqIENsYXNzIHRoYXQgcmVwcmVzZW50cyBhIHRyYWluaW5nIGV4YW1wbGUgKGUuZy4gdGltZSBzZXJpZSBvZiB2ZWN0b3JzXG4gKiB0aGF0IHJlcHJlc2VudHMgYSBnZXN0dXJlKS5cbiAqIElmIG5vIHBhcmFtZXRlcnMgYXJlIGdpdmVuLCB0aGUgZGltZW5zaW9ucyB3aWxsIGJlIGd1ZXNzZWQgZnJvbSB0aGUgZmlyc3RcbiAqIGFkZGVkIGVsZW1lbnQgYWZ0ZXIgaW5zdGFudGlhdGlvbiBvZiB0aGUgY2xhc3MgYW5kIGFmdGVyIGVhY2ggY2FsbCB0byBjbGVhci5cbiAqIElmIHBhcmFtZXRlcnMgYXJlIGdpdmVuLCB0aGV5IHdpbGwgYmUgdXNlZCB0byBzdHJpY3RseSBjaGVjayBhbnkgbmV3IGVsZW1lbnQsXG4gKiBhbnl0aW1lLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBbaW5wdXREaW1lbnNpb249bnVsbF0gLSBJZiBkZWZpbmVkLCBkZWZpbml0aXZlIGlucHV0IGRpbWVuc2lvblxuICogICAgdGhhdCB3aWxsIGJlIGNoZWNrZWQgdG8gdmFsaWRhdGUgYW55IG5ldyBlbGVtZW50IGFkZGVkLlxuICogQHBhcmFtIHtOdW1iZXJ9IFtvdXRwdXREaW1lbnNpb249bnVsbF0gLSBJZiBkZWZpbmVkLCBkZWZpbml0aXZlIG91dHB1dCBkaW1lbnNpb25cbiAqICAgIHRoYXQgd2lsbCBiZSBjaGVja2VkIHRvIHZhbGlkYXRlIGFueSBuZXcgZWxlbWVudCBhZGRlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgbWFubyBmcm9tICdtYW5vLWpzL2NsaWVudCc7XG4gKlxuICogY29uc3QgZXhhbXBsZSA9IG5ldyBtYW5vLkV4YW1wbGUoKTtcbiAqIGNvbnN0IHRyYWluaW5nU2V0ID0gbmV3IG1hbm8uVHJhaW5pbmdTZXQoKTtcbiAqXG4gKiBleGFtcGxlLnNldExhYmVsKCd0ZXN0Jyk7XG4gKiBleGFtcGxlLmFkZEVsZW1lbnQoWzAsIDEsIDIsIDNdKTtcbiAqIGNvbnN0IHJhcGlkTWl4SnNvbkV4YW1wbGUgPSBleGFtcGxlLnRvSlNPTigpO1xuICpcbiAqIHRyYWluaW5nU2V0LmFkZEV4YW1wbGUocmFwaWRNaXhKc29uRXhhbXBsZSk7XG4gKi9cbmNsYXNzIEV4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihpbnB1dERpbWVuc2lvbiA9IG51bGwsIG91dHB1dERpbWVuc2lvbiA9IG51bGwpIHtcbiAgICBpZiAoaW5wdXREaW1lbnNpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZml4ZWREaW1lbnNpb25zID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5wdXREaW1lbnNpb24gPSBpbnB1dERpbWVuc2lvbjtcbiAgICAgIHRoaXMub3V0cHV0RGltZW5zaW9uID0gb3V0cHV0RGltZW5zaW9uICE9PSBudWxsID8gb3V0cHV0RGltZW5zaW9uIDogMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXhlZERpbWVuc2lvbnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVsID0gcmFwaWRNaXhBZGFwdGVycy5SQVBJRF9NSVhfREVGQVVMVF9MQUJFTDtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmFkZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgaW50ZXJuYWwgdmFyaWFibGVzIHNvIHRoYXQgd2UgYXJlIHJlYWR5IHRvIHJlY29yZCBhIG5ldyBleGFtcGxlLlxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgaWYgKCF0aGlzLmZpeGVkRGltZW5zaW9ucykge1xuICAgICAgdGhpcy5pbnB1dERpbWVuc2lvbiA9IG51bGw7XG4gICAgICB0aGlzLm91dHB1dERpbWVuc2lvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dCA9IFtdO1xuICAgIHRoaXMub3V0cHV0ID0gW107XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBleGFtcGxlJ3MgY3VycmVudCBsYWJlbC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsIC0gVGhlIG5ldyBsYWJlbCB0byBhc3NpZ24gdG8gdGhlIGNsYXNzLlxuICAgKi9cbiAgc2V0TGFiZWwobGFiZWwpIHtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGVsZW1lbnQgdG8gdGhlIGN1cnJlbnQgZXhhbXBsZS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheS5OdW1iZXJ8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheX0gaW5wdXRWZWN0b3IgLSBUaGUgaW5wdXRcbiAgICogcGFydCBvZiB0aGUgZWxlbWVudCB0byBhZGQuXG4gICAqIEBwYXJhbSB7QXJyYXkuTnVtYmVyfEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXl9IFtvdXRwdXRWZWN0b3I9bnVsbF0gLSBUaGVcbiAgICogb3V0cHV0IHBhcnQgb2YgdGhlIGVsZW1lbnQgdG8gYWRkLlxuICAgKlxuICAgKiBAdGhyb3dzIEFuIGVycm9yIGlmIGlucHV0VmVjdG9yIG9yIG91dHB1dFZlY3RvciBkaW1lbnNpb25zIG1pc21hdGNoLlxuICAgKi9cbiAgYWRkRWxlbWVudChpbnB1dFZlY3Rvciwgb3V0cHV0VmVjdG9yID0gbnVsbCkge1xuICAgIHRoaXMuX3ZhbGlkYXRlSW5wdXRBbmRVcGRhdGVEaW1lbnNpb25zKGlucHV0VmVjdG9yLCBvdXRwdXRWZWN0b3IpO1xuXG4gICAgaWYgKGlucHV0VmVjdG9yIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5IHx8XG4gICAgICAgIGlucHV0VmVjdG9yIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KVxuICAgICAgaW5wdXRWZWN0b3IgPSBBcnJheS5mcm9tKGlucHV0VmVjdG9yKTtcblxuICAgIGlmIChvdXRwdXRWZWN0b3IgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHxcbiAgICAgICAgb3V0cHV0VmVjdG9yIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KVxuICAgICAgb3V0cHV0VmVjdG9yID0gQXJyYXkuZnJvbShvdXRwdXRWZWN0b3IpO1xuXG4gICAgdGhpcy5pbnB1dC5wdXNoKGlucHV0VmVjdG9yKTtcblxuICAgIGlmICh0aGlzLm91dHB1dERpbWVuc2lvbiA+IDApXG4gICAgICB0aGlzLm91dHB1dC5wdXNoKG91dHB1dFZlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBleGFtcGxlIGluIFJhcGlkTWl4IEpTT04gZm9ybWF0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBIFJhcGlkTWl4IGNvbXBsaWFudCBleGFtcGxlIG9iamVjdC5cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9jVHlwZTogJ3JhcGlkLW1peDptbC1leGFtcGxlJyxcbiAgICAgIGRvY1ZlcnNpb246IHJhcGlkTWl4QWRhcHRlcnMuUkFQSURfTUlYX0RPQ19WRVJTSU9OLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgLy8gaW5wdXREaW1lbnNpb246IHRoaXMuaW5wdXREaW1lbnNpb24sXG4gICAgICAgIC8vIG91dHB1dERpbWVuc2lvbjogdGhpcy5vdXRwdXREaW1lbnNpb24sXG4gICAgICAgIGlucHV0OiB0aGlzLmlucHV0LnNsaWNlKDApLFxuICAgICAgICBvdXRwdXQ6IHRoaXMub3V0cHV0LnNsaWNlKDApLFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgX3ZhbGlkYXRlSW5wdXRBbmRVcGRhdGVEaW1lbnNpb25zKGlucHV0VmVjdG9yLCBvdXRwdXRWZWN0b3IpIHtcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXRWZWN0b3IpIHx8IChvdXRwdXRWZWN0b3IgJiYgIWlzQXJyYXkob3V0cHV0VmVjdG9yKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW5wdXRWZWN0b3IgYW5kIG91dHB1dFZlY3RvciBtdXN0IGJlIGFycmF5cycpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pbnB1dERpbWVuc2lvbiB8fCAhdGhpcy5vdXRwdXREaW1lbnNpb24pIHtcbiAgICAgIHRoaXMuaW5wdXREaW1lbnNpb24gPSBpbnB1dFZlY3Rvci5sZW5ndGg7XG4gICAgICB0aGlzLm91dHB1dERpbWVuc2lvbiA9IG91dHB1dFZlY3RvciA/IG91dHB1dFZlY3Rvci5sZW5ndGggOiAwO1xuICAgICAgLy8gdGhpcy5fZW1wdHkgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlucHV0VmVjdG9yLmxlbmd0aCAhPSB0aGlzLmlucHV0RGltZW5zaW9uIHx8XG4gICAgICAgICAgICAgIG91dHB1dFZlY3Rvci5sZW5ndGggIT0gdGhpcy5vdXRwdXREaW1lbnNpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZGltZW5zaW9ucyBtaXNtYXRjaCcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIl19