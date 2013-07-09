
/**
 * Expose `shader`
 */

module.exports = shader;

/**
 * shader
 * @param {WebGLRenderingContext} context A WebGL rendering context.
 * @return {Shader} Shader
 */

function shader (context) {

  /**
   * Create a shader.
   * @param {Object} options Options for creating the shader.
   *   @param {Number} [options.type] The WebGL type of the shader.
   *   @param {String} [options.source] The source text of the shader.
   * @return {v3.Shader} A Shader instance.
   * @api public
   */

  function Shader (options) {
    var options = options || {};
    var type = options.type;
    var source = options.source;
    var shader = context.createShader(type);

    context.shaderSource(shader, source);
    context.compileShader(shader);
    
    var valid = context.getShaderParameter(shader, context.COMPILE_STATUS);
    var log = context.getShaderInfoLog(shader);
    
    this.shader = shader;
    this.type = type;
    this.source = source;
    this.valid = valid;
    this.log = log;  
  };

  /**
   * Shader.create
   * Create a shader.
   * @param {Object} options Options for creating the shader.
   *   @param {Number} [options.type] The WebGL type of the shader.
   *   @param {String} [options.source] The source text of the shader.
   * @return {v3.Shader} A shader.
   * @api public
   */

  Shader.create = function (options) {
    return new Shader(options);
  };

  /**
   * Shader#destroy
   * Destroy this shader.
   * @api public
   */

  Shader.prototype.destroy = function () {
    context.deleteShader(this.shader);
  };

  return Shader;
};
