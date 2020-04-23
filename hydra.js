var hydraCanvas = document.getElementById("hydraCanvas");
var aspectRatio = window.innerHeight / window.innerWidth;
hydraCanvas.width = 480;
hydraCanvas.height = 480 * aspectRatio;
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
