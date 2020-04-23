var hydraFnTypesToBlocklyCategories = {
	"src": {
		"category": "I/O & Texture",
		"index": 0
	},
	"coord": {
		"category": "Geometry Transforms",
		"index": 1
	},
	"color": {
		"category": "Adjust Color",
		"index": 2
	},
	"combine": {
		"category": "Blend",
		"index": 3
	},
	"combineCoord": {
		"category": "Modulators",
		"index": 4
	},
  "parameter": {
    "category": "Parameters",
		"index": 5
  },
  
};

var hueDivisor = Object.keys(hydraFnTypesToBlocklyCategories).length + 1;
var hueMultiplier = 360 / hueDivisor;
var toolbox = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
var workspaceBlocks = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
var parser = new DOMParser();
toolbox = parser.parseFromString(toolbox, "application/xml");
toolbox = toolbox.firstElementChild;
workspaceBlocks = parser.parseFromString(workspaceBlocks, "application/xml");
workspaceBlocks = workspaceBlocks.firstElementChild;

window.webcamSrc = null;
window.videoSrc = null;
window.imageSrc = null;

function code(block, args, dot) {
  return `${dot ? '' : '.'}${block.type}(${args.join(',')})`
}

var unsupportedFns = ['r', 'g', 'b', 'a', 'prev', 'sum'];
var specialFns = [{
  name: 'webcam',
  type: 'src'
},{
  name: 'image',
  type: 'src'
},{
  name: 'video',
  type: 'src'
},{
  name: 'out',
  type: 'src'
}, {
  name: 'number',
  type: 'parameter'
}, {
  name: 'array',
  type: 'parameter'
}, {
  name: 'anon',
  type: 'parameter'
}, {
  name: 'text',
  type: 'parameter'
}];

var hydraFns = Object.values(hydra.generator.glslTransforms);

hydraFns.forEach(fn => {
  if(unsupportedFns.indexOf(fn.name) > -1) return;
  fn.inputs.forEach(ip => {
    if(ip.type === 'vec4') {
      ip.name = 'texture';
    }
  });
  
	Blockly.defineBlocksWithJsonArray([{
		type: fn.name,
		message0: `${fn.type === 'src' ? '' : '.'}${fn.name}( %1${fn.inputs.map((ip, i) => `${ip.name}: %${i+2}`).join(' , ')})`,
		args0: [{
			type: 'input_dummy'
		}].concat(fn.inputs.map(ip => {
          if(ip.type === 'vec4') {
            return {
              type: 'input_statement',
              name: ip.name
            }
          } else {
            return {
              type: 'input_value',
              name: ip.name,
              check: ['Number', 'Function', 'Array']
            }
          }
        }
      )
    ),
		previousStatement: '',
		nextStatement: '',
		colour: hydraFnTypesToBlocklyCategories[fn.type].index * hueMultiplier,
		tooltip: '',
		helpUrl: ''
  }]);
	Blockly.JavaScript[fn.name] = function (block) {
    if(block.getNextBlock() === null && block.getPreviousBlock() === null) return '';
    var args = fn.inputs.map(ip => {
      if(ip.type === 'vec4') {
        return Blockly.JavaScript.statementToCode(block, ip.name);
      } else {
        return Blockly.JavaScript.valueToCode(block, ip.name, Blockly.JavaScript.ORDER_ATOMIC)
      }
    });
		return code(block, args, fn.type === 'src');
  };
  var blockXML = `<block type="${fn.name}">
    ${fn.inputs.map(ip => ip.type === 'vec4' ? '' : `<value name="${ip.name}">
      <block type="math_number">
        <field name="NUM">${ip.default}</field>
      </block>
    </value>`).join('\n')}
  </block>`;
  blockXML = parser.parseFromString(blockXML, "application/xml");
  var categoryNode = toolbox.querySelector(`category[name="${hydraFnTypesToBlocklyCategories[fn.type].category}"]`);
  if(!categoryNode) {
    categoryNode = toolbox.parentNode.createElement('category');
    categoryNode.setAttribute('name', hydraFnTypesToBlocklyCategories[fn.type].category);
    categoryNode.setAttribute('colour', hydraFnTypesToBlocklyCategories[fn.type].index * hueMultiplier);
    toolbox.appendChild(categoryNode);
  }
  categoryNode.appendChild(blockXML.firstElementChild);
});

specialFns.forEach(addSpecialBlock);
