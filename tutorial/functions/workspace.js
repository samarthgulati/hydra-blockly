var blocklyDiv = document.getElementById('blocklyDiv');
var hydraCanvas = document.getElementById('hydraCanvas');

var parser = new DOMParser();
var hydraCode = '';
var options = { 
  render: 'o0',
	comments : false, 
	disable : false, 
	maxBlocks : Infinity, 
	trashcan : false, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : false, 
	oneBasedIndex : true
};
 
var workspace = Blockly.inject(blocklyDiv, options);

function init() {
  var workspaceBlocks = document.querySelector('template').content.cloneNode(true);
  /* Load blocks to workspace. */
  Blockly.Xml.domToWorkspace(workspaceBlocks.firstElementChild, workspace);
  updateCanvas({});
}

function updateCanvas(e) {
	// would fail if user adds more than one audioConfig
	if(e.type
		 && e.type === Blockly.Events.BLOCK_DELETE
		 && e.oldXml.getAttribute('type') === 'audioConfig') {
		window._blocklyHydra.addAudioConfig = false;
	}
	// would fail if user adds more than one audioConfig
	if(e.type
		&& e.type === Blockly.Events.BLOCK_DELETE
		&& e.oldXml.getAttribute('type') === 'render') {
	 window._blocklyHydra.render = 'o0';
 }
	// Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
	window.LoopTrap = 1000;
	Blockly.JavaScript.INFINITE_LOOP_TRAP =
		'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	if(window._blocklyHydra.addAudioConfig) {
		code = Object.keys(window._blocklyHydra.audioConfig).map(key => {
			if(key === 'showBins') {
				if(window._blocklyHydra.audioConfig[key] === 'true') return `a.show();`;
				return `a.hide();`;
			} 
			return `a.${key}(${window._blocklyHydra.audioConfig[key]});`
		}).join('') + '\n' + code;
	}
	if(window._blocklyHydra.webcamSrc !== null) {
		code = 's3.initCam(window._blocklyHydra.webcamSrc);\n' + code;
	}
	if(window._blocklyHydra.videoSrc !== null) {
		code = `var vid = document.createElement('video');
vid.crossOrigin = 'anonymous';
vid.autoplay = true;
vid.loop = true;
vid.src = window._blocklyHydra.videoSrc;
s2.init({src: vid});\n` + code
	}
	if(window._blocklyHydra.imageSrc !== null) {
		code = `var imgEl = document.createElement('img');
imgEl.crossOrigin = 'anonymous';
imgEl.src = window._blocklyHydra.imageSrc;
s1.init({src: imgEl});\n` + code;
	}
	code += '\n' + 'render(' + window._blocklyHydra.render + ');';
  try {
		eval(code);
	} catch (e) {
		console.log(e, code);
	}
}
workspace.addChangeListener(updateCanvas);
init();