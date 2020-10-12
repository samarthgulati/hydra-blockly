function addSpecialBlock(fn) {
  var categoryNode = toolbox.querySelector(`category[name="${hydraFnTypesToBlocklyCategories[fn.type].category}"]`);
  if(!categoryNode) {
    categoryNode = toolbox.parentNode.createElement('category');
    categoryNode.setAttribute('name', hydraFnTypesToBlocklyCategories[fn.type].category);
    categoryNode.setAttribute('colour', hydraFnTypesToBlocklyCategories[fn.type].index * hueMultiplier);
    toolbox.appendChild(categoryNode);
  }
  switch(fn.name) {
    case 'blendMode': {
      Blockly.defineBlocksWithJsonArray([{
        "type": "blendMode",
        "message0": ". %1 ( %2 texture: %3 )",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "blendMode",
            "options": blendmodes_glsl_fns.map(function (fn) {
              return [
                fn.name,
                fn.name
              ]
            })
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "texture"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": hydraFnTypesToBlocklyCategories[fn.type].index * hueMultiplier,
        "tooltip": "",
        "helpUrl": ""
      }]);
      // webcam mapped to s3
      Blockly.JavaScript['blendMode'] = function(block) {
        if(block.getNextBlock() === null && block.getPreviousBlock() === null) return '';
        var dropdown_blendMode = block.getFieldValue('blendMode');
        var textureCode = Blockly.JavaScript.statementToCode(block, 'texture');
        return `.${dropdown_blendMode}(${textureCode})`
      };
      var blockXML = `<block type="blendMode"></block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break;
    }
    // adding block to scope variables created
    case 'number': {
      var blockXML = `<block type="math_number">
        <field name="NUM">0</field>
      </block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break;
    }
    case 'text': {
      var globalVariableStarterValues = ['mouse.x', '0.3 * (1 + Math.sin(time))'];
      globalVariableStarterValues.forEach(function (val) {
        var blockXML = `<block type="text">
          <field name="TEXT">${val}</field>
        </block>`;
        blockXML = parser.parseFromString(blockXML, "application/xml");
        categoryNode.appendChild(blockXML.firstElementChild);
      });
      break;
    }
    case 'array': {
      blockXML = `<block type="lists_create_with">
        <mutation items="3"></mutation>
        <value name="ADD0">
          <block type="math_number">
            <field name="NUM">0</field>
          </block>
        </value>
        <value name="ADD1">
          <block type="math_number">
            <field name="NUM">0</field>
          </block>
        </value>
        <value name="ADD2">
          <block type="math_number">
            <field name="NUM">0</field>
          </block>
        </value>
      </block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break;
    }
    case 'anon': {
      Blockly.defineBlocksWithJsonArray([{
        "type": "anon",
        "message0": "( ) => ( %1 %2 )",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "fn",
            "check": "String"
          }
        ],
        "output": "Function",
        "colour": hydraFnTypesToBlocklyCategories[fn.type].index * hueMultiplier,
        "tooltip": "implicit return",
        "helpUrl": ""
      }]);
      Blockly.JavaScript['anon'] = function(block) {
        if(block.getSurroundParent() === null) return '';
        var value_function = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC);
        value_function = value_function.substring(1, value_function.length - 1);
        return [`() => (${value_function})`, Blockly.JavaScript.ORDER_NONE];
      };
      var blockXML = `<block type="anon">
        <value name="fn">
          <block type="text">
            <field name="TEXT">a.fft[0]</field>
          </block>
        </value>
      </block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break;
    }
    case 'out': {
      Blockly.defineBlocksWithJsonArray([{
        "type": "out",
        "message0": ".out( buffer: %1 )",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "buffer",
            "options": [
              [
                "output0",
                "o0"
              ],
              [
                "output1",
                "o1"
              ],
              [
                "output2",
                "o2"
              ],
              [
                "output3",
                "o3"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "colour": hydraFnTypesToBlocklyCategories[fn.type].index * hueMultiplier,
        "tooltip": "",
        "helpUrl": ""
      }]);
      Blockly.JavaScript['out'] = function(block) {
        if(block.getNextBlock() === null && block.getPreviousBlock() === null) return '';
        var args = [
          block.getFieldValue('buffer'),
        ]
        return code(block, args) + ';';
      };
      var blockXML = `<block type="out">
        <field name="buffer">o0</field>
      </block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break;
    }
    case 'webcam': {
      Blockly.defineBlocksWithJsonArray([{
        "type": "webcam",
        "message0": "webcam(input: %1 )",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "buffer",
            "options": [
              [
                "webcam0",
                "0"
              ],
              [
                "webcam1",
                "1"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": hydraFnTypesToBlocklyCategories[fn.type].index * hueMultiplier,
        "tooltip": "",
        "helpUrl": ""
      }]);
      // webcam mapped to s3
      Blockly.JavaScript['webcam'] = function(block) {
        if(block.getNextBlock() === null && block.getPreviousBlock() === null) return '';
        var dropdown_buffer = block.getFieldValue('buffer');
        window._blocklyHydra.webcamSrc = dropdown_buffer
        return `src(s3)`
      };
      var blockXML = `<block type="webcam">
        <field name="input">0</field>
      </block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break;
    }
    case 'image': {
      Blockly.defineBlocksWithJsonArray([{
        "type": "image",
        "message0": "image(src: %1 )",
        "args0": [
          {
            "type": "field_input",
            "name": "src",
            "text": "https://upload.wikimedia.org/wikipedia/commons/a/aa/TwibrightLinksTestCard.png"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": hydraFnTypesToBlocklyCategories[fn.type].index * hueMultiplier,
        "tooltip": "",
        "helpUrl": ""
      }]);

      // image mapped to s1
      Blockly.JavaScript['image'] = function(block) {
        if(block.getNextBlock() === null && block.getPreviousBlock() === null) return '';
        var text_src = block.getFieldValue('src');
        window._blocklyHydra.imageSrc = text_src
        return `src(s1)`
      };
      var blockXML = `<block type="image">
        <field name="src">https://upload.wikimedia.org/wikipedia/commons/a/aa/TwibrightLinksTestCard.png</field>
      </block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break; 
    }
    case 'video': {
      Blockly.defineBlocksWithJsonArray([{
        "type": "video",
        "message0": "video(src: %1 )",
        "args0": [
          {
            "type": "field_input",
            "name": "src",
            "text": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": hydraFnTypesToBlocklyCategories[fn.type].index * hueMultiplier,
        "tooltip": "",
        "helpUrl": ""
      }]);
      // video mapped to s2
      Blockly.JavaScript['video'] = function(block) {
        if(block.getNextBlock() === null && block.getPreviousBlock() === null) return '';
        var text_src = block.getFieldValue('src');
        window._blocklyHydra.videoSrc = text_src
        return `src(s2)`
      };
      var blockXML = `<block type="video">
        <field name="src">http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4</field>
      </block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break;
    }
    case 'audioConfig': {
      Blockly.defineBlocksWithJsonArray([{
        "type": "audioConfig",
        "message0": "audioConfig = { %1 showBins: %2 , %3 setBins: %4 , %5 setCutoff: %6 , %7 setScale: %8 , %9 setSmooth: %10 %11 }",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "showBins",
            "options": [
              [
                "true",
                "true"
              ],
              [
                "false",
                "false"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "setBins",
            "value": 6,
            "min": 0
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "setCutoff",
            "value": 1,
            "min": 0,
            "precision": 0.01
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "setScale",
            "value": 10,
            "precision": 0.01
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "setSmooth",
            "value": 0.96,
            "min": 0,
            "max": 1,
            "precision": 0.001
          },
          {
            "type": "input_dummy"
          }
        ],
        "inputsInline": false,
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
      }]);
      Blockly.JavaScript['audioConfig'] = function(block) {
        var showBins = block.getFieldValue('showBins');
        var setBins = block.getFieldValue('setBins');
        var setCutoff = block.getFieldValue('setCutoff');
        var setScale = block.getFieldValue('setScale');
        var setSmooth = block.getFieldValue('setSmooth');
        window._blocklyHydra.audioConfig = {
          showBins: showBins,
          setBins: setBins,
          setCutoff: setCutoff,
          setScale: setScale,
          setSmooth: setSmooth
        };
        window._blocklyHydra.addAudioConfig = true;
        return '';
      };
      var blockXML = `<block type="audioConfig">
        <field name="showBins">true</field>
        <field name="setBins">6</field>
        <field name="setCutoff">1</field>
        <field name="setScale">10</field>
        <field name="setSmooth">0.96</field>
      </block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break;
    }
    case 'render': {
      Blockly.defineBlocksWithJsonArray([{
        "type": "render",
        "message0": ".render( buffer: %1 )",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "buffer",
            "options": [
              [
                "output0",
                "o0"
              ],
              [
                "output1",
                "o1"
              ],
              [
                "output2",
                "o2"
              ],
              [
                "output3",
                "o3"
              ],
              [
                "all",
                ""
              ]
            ]
          }
        ],
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
      }]);
      Blockly.JavaScript['render'] = function(block) {
        window._blocklyHydra.render = block.getFieldValue('buffer');
        return '';
      };
      var blockXML = `<block type="render">
        <field name="buffer">o0</field>
      </block>`;
      blockXML = parser.parseFromString(blockXML, "application/xml");
      categoryNode.appendChild(blockXML.firstElementChild);
      break;
    }
  }
}