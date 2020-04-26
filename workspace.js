var liveUpdate = document.getElementById("liveUpdate");
var maxCanvas = document.getElementById("maxCanvas");
var consoleEl = document.getElementById("consoleEl");
var runBtn = document.getElementById("runBtn");
var copyCode = document.getElementById("copyCode");

var options = {
	toolbox : toolbox,
	collapse : false,
	comments : false,
	disable : false,
	maxBlocks : Infinity,
	trashcan : false,
	horizontalLayout : false,
	toolboxPosition : 'start',
	css : true,
	media : 'https://blockly-demo.appspot.com/static/media/',
	rtl : false,
	scrollbars : true,
	sounds : true,
	oneBasedIndex : true
};

var workspace = Blockly.inject(blocklyDiv, options);

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

function updateCanvas(e) {
	// would fail if user adds more than one audioConfig
	if(e.type
		 && e.type === Blockly.Events.BLOCK_DELETE
		 && e.oldXml.getAttribute('type') === 'audioConfig') {
		window._blocklyHydra.addAudioConfig = false;
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
s1.init({src: imgEl});\n` + code
	}
	consoleEl.textContent = code;
  if(liveUpdate.checked || e.type === 'click') {
		try {
			eval(code);
		} catch (e) {
			console.log(e, code);
			consoleEl.textContent = e.toString();
		}
	}
}

function copyCodeToClipboard() {
  var textArea = document.createElement("textarea");
  textArea.value = consoleEl.textContent;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
		var successful = document.execCommand('copy');
    if(successful) {
			copyCode.textContent = 'Copied'
			copyCode.setAttribute('disabled', true)
			setTimeout(function() {
				copyCode.textContent = 'Copy Code'
				copyCode.removeAttribute('disabled')
			}, 500)
		}
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

/**
 * ------------------------------------------------
 * Interactions
 * ------------------------------------------------
 */

// Buttons
runBtn.addEventListener('click', updateCanvas);
copyCode.addEventListener('click', copyCodeToClipboard);

// Maximize canvas toggle for Hydra
maxCanvas.addEventListener('change', function() {
	if(maxCanvas.checked) {
		document.body.classList.add('maxCanvas');
	} else {
		document.body.classList.remove('maxCanvas');
	}
});

// Live toggle functionality
liveUpdate.addEventListener('change', function() {
	if(liveUpdate.checked) {
		runBtn.setAttribute('disabled', true);
		workspace.addChangeListener(updateCanvas);
	} else {
		runBtn.removeAttribute('disabled');
		workspace.removeChangeListener(updateCanvas);
	}
});
workspace.addChangeListener(updateCanvas);

// Double cick to hide UI
hydraCanvas.addEventListener('dblclick', function(e) {
	hydraCanvas.classList.toggle('moveToTop');
});

// Using ARROW KEYS to change values dynamically
var _KEYS = { min: 37, max: 40 };
document.body.addEventListener('keydown',function(e){
	if (e.which >= _KEYS.min && e.which <= _KEYS.max){
		var blocklyInput = document.getElementsByClassName("blocklyHtmlInput")[0];
		var in_val = blocklyInput.value;
		//
		if(!blocklyInput.hasAttribute('type') && !isNaN(in_val)){
			//
			var current_val = parseFloat(in_val);
			console.log('Init input value : ' + current_val);
			//
			blocklyInput.setAttribute('type', 'range');
			//
			if(current_val == 0)	current_val = 0.1;
			if(!Number.isInteger(current_val))
				blocklyInput.setAttribute('step', '0.1');
			else
				blocklyInput.setAttribute('step', '1');
		}
	}
});

/**
 * ------------------------------------------------
 * Helper functions
 * ------------------------------------------------
 */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};