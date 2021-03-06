var liveUpdate = document.getElementById("liveUpdate");
var maxCanvas = document.getElementById("maxCanvas");
var consoleEl = document.getElementById("consoleEl");
var runBtn = document.getElementById("runBtn");
var copyCode = document.getElementById("copyCode");
var overlay = document.getElementById("overlay");
var saveBtn = document.getElementById('saveBtn');
var jsonUrl = JsonUrl('lzma');

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
function findCustomFunctionByName(name) {
	var fnObj = customFunctions.find(function(fn) { return fn.name === name});
	fnObj.inputs = fnObj.inputs.filter(function (input) {
		return input.type !== "vec4";
	});
	return JSON.stringify(fnObj);
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
	var customFunctionsIncluded = customFunctionNames.filter(function(name) {
		return code.includes(name + '(');
	});
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
vid.src = "${window._blocklyHydra.videoSrc}";
s2.init({src: vid});\n` + code
	}
	if(window._blocklyHydra.imageSrc !== null) {
		code = `var imgEl = document.createElement('img');
imgEl.crossOrigin = 'anonymous';
imgEl.src = "${window._blocklyHydra.imageSrc}";
s1.init({src: imgEl});\n` + code;
	}
	if(customFunctionsIncluded.length > 0) {
		var customCode = '';
		customFunctionsIncluded.forEach(function(cf) {
			customCode = `setFunction(${findCustomFunctionByName(cf)});\n` + customCode;
		});
		code = customCode + '\n' + code;
	}
	code += '\n' + 'render(' + window._blocklyHydra.render + ');';
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

function showOverlay() {
	overlay.classList.remove('hidden');
}

function hideOverlay() {
	overlay.classList.add('hidden');
}

function updateURL(stateParam) {
	var searchParams = new URLSearchParams(window.location.search);
	searchParams.set('state', stateParam);
	var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + searchParams.toString();
	window.history.pushState({ path: newUrl }, '', newUrl);
}

function saveToURL() {
	showOverlay();
	var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  // searchParams.set('state', btoa(JSON.stringify(state)));
  jsonUrl.compress({xmlText}).then(stateParam => { 
		updateURL(stateParam);
		if(conn && conn._open) conn.send(stateParam);
    hideOverlay();
  });
}

function loadState(compressedState) {
	jsonUrl.decompress(compressedState).then(({xmlText}) => {
		var temp = document.createElement('template');
		temp.innerHTML = xmlText;
		var workspaceBlocks = temp.content.cloneNode(true);
		workspace.clear();
		/* Load blocks to workspace. */
		Blockly.Xml.domToWorkspace(workspaceBlocks.firstElementChild, workspace);
		updateCanvas({});
		hideOverlay();
	});
}

function loadFromURL() {
  showOverlay();
  var searchParams = new URLSearchParams(window.location.search);
  if(!searchParams.has('state')) {
    hideOverlay();
    return;
	}
	loadState(searchParams.get('state'));
}
saveBtn.addEventListener('click', saveToURL);
runBtn.addEventListener('click', updateCanvas);
copyCode.addEventListener('click', copyCodeToClipboard);
maxCanvas.addEventListener('change', function() {
	if(maxCanvas.checked) {
		document.body.classList.add('maxCanvas');
	} else {
		document.body.classList.remove('maxCanvas');
	}
});
liveUpdate.addEventListener('change', function() {
	if(liveUpdate.checked) {
		runBtn.setAttribute('disabled', true);
	} else {
		runBtn.removeAttribute('disabled');
	}
});
// hide vertical bar
workspace.scrollbar.vScroll.svgGroup_.style.display = 'none';
// hide horizontal bar
workspace.scrollbar.hScroll.svgGroup_.style.display = 'none';
workspace.addChangeListener(updateCanvas);
hydraCanvas.addEventListener('dblclick', function(e) {
	hydraCanvas.classList.toggle('moveToTop');
});
loadFromURL();