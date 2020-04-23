var hydraCanvas = document.getElementById("hydraCanvas");
var hydra = new Hydra({
	canvas: hydraCanvas
});
blendmodes_glsl_fns.forEach(function(fn) {
  hydra.synth.setFunction(fn)
});
levels_glsl_fns.forEach(function(fn) {
  hydra.synth.setFunction(fn)
});
css_filter_glsl_fns.forEach(function(fn) {
  hydra.synth.setFunction(fn)
});
