var hydraCanvas = document.getElementById("hydraCanvas");
var aspectRatio = window.innerHeight / window.innerWidth;
hydraCanvas.width = 480;
hydraCanvas.height = 480 * aspectRatio;
var hydra = new Hydra({
	canvas: hydraCanvas
});

function flatten(arr) {
  return arr.reduce(function(result, val) {
    return result.concat(val)
  }, []);
}

var customFunctions = flatten([
  blendmodes_glsl_fns,
  levels_glsl_fns,
  css_filter_glsl_fns,
  css_gradients_glsl_fns,
  image_filter_fns,
  book_of_shaders_fns,
  distort_fns,
]);

var customFunctionNames = [];

customFunctions.forEach(function(fn) {
  customFunctionNames.push(fn.name);
  hydra.synth.setFunction(fn);
});

// blendmodes_glsl_fns.forEach(function(fn) {
//   hydra.synth.setFunction(fn)
// });
// levels_glsl_fns.forEach(function(fn) {
//   hydra.synth.setFunction(fn)
// });
// css_filter_glsl_fns.forEach(function(fn) {
//   hydra.synth.setFunction(fn)
// });
// css_gradients_glsl_fns.forEach(function(fn) {
//   hydra.synth.setFunction(fn)
// });
// image_filter_fns.forEach(function(fn) {
//   hydra.synth.setFunction(fn)
// });
// book_of_shaders_fns.forEach(function(fn) {
//   hydra.synth.setFunction(fn)
// });