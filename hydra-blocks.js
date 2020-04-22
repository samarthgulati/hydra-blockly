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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, {
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, {
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "osc",
  "message0": "osc( freq: %1 , sync: %2 , offset: %3 )",
  "args0": [
    {
      "type": "field_number",
      "name": "frequency",
      "value": 60,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "sync",
      "value": 0.1,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "offset",
      "value": 0,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
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
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "noise",
  "message0": "noise( scale: %1 , offset: %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "scale",
      "value": 10,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "offset",
      "value": 0.1,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "shape",
  "message0": "shape( sides: %1 , radius: %2 , smoothing %3 )",
  "args0": [
    {
      "type": "field_number",
      "name": "sides",
      "value": 3
    },
    {
      "type": "field_number",
      "name": "radius",
      "value": 0.3,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "smoothing",
      "value": 0.01,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "solid",
  "message0": "solid( r: %1 , g: %2 , b: %3 , a: %4 )",
  "args0": [
    {
      "type": "field_number",
      "name": "r",
      "value": 0,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "g",
      "value": 0,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "b",
      "value": 0,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "a",
      "value": 1,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "voronoi",
  "message0": "voronoi( scale: %1 , speed: %2 , blending: %3 )",
  "args0": [
    {
      "type": "field_number",
      "name": "scale",
      "value": 5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "speed",
      "value": 0.3,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "blending",
      "value": 0.3,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gradient",
  "message0": "gradient( speed: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "speed",
      "value": 0.01,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "add",
  "message0": ".add( texture: %1 , amount: %2 )",
  "args0": [
    {
      "type": "input_statement",
      "name": "texture"
    },
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.5,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "blend",
  "message0": ".blend( texture: %1 , amount: %2 )",
  "args0": [
    {
      "type": "input_statement",
      "name": "texture"
    },
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.5,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mult",
  "message0": ".mult( texture: %1 , amount: %2 )",
  "args0": [
    {
      "type": "input_statement",
      "name": "texture"
    },
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.5,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mask",
  "message0": ".mask( texture: %1 , reps: %2 , offset: %3 )",
  "args0": [
    {
      "type": "input_statement",
      "name": "texture"
    },
    {
      "type": "field_number",
      "name": "reps",
      "value": 3,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "offset",
      "value": 0.5,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "layer",
  "message0": ".layer( texture: %1 )",
  "args0": [
    {
      "type": "input_statement",
      "name": "texture"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "diff",
  "message0": ".diff( texture: %1 )",
  "args0": [
    {
      "type": "input_statement",
      "name": "texture"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}, 
{
  "type": "brightness",
  "message0": ".brightness( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.4,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "contrast",
  "message0": ".contrast( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 1.6,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "colorama",
  "message0": ".colorama( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 1.6,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "invert",
  "message0": ".invert( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 1,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "saturate",
  "message0": ".saturate( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 1,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "thresh",
  "message0": ".thresh( threshold: %1 , tolerance %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "threshold",
      "value": 0.5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "tolerance",
      "value": 0.04,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "posterize",
  "message0": ".posterize( bins: %1 , gamma %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "bins",
      "value": 3,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "gamma",
      "value": 0.6,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "luma",
  "message0": ".luma( threshold: %1 , tolerance %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "threshold",
      "value": 0.5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "tolerance",
      "value": 0.1,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "color",
  "message0": ".color( r: %1 , g %2 , b %3 )",
  "args0": [
    {
      "type": "field_number",
      "name": "r",
      "value": 0.5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "g",
      "value": 0.1,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "b",
      "value": 0.1,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "shift",
  "message0": ".shift( r: %1 , g %2 , b %3 , a %4 )",
  "args0": [
    {
      "type": "field_number",
      "name": "r",
      "value": 0.5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "g",
      "value": 0.5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "b",
      "value": 0.5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "a",
      "value": 0.5,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "kaleid",
  "message0": ".kaleid( nSides: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "nSides",
      "value": 4
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pixelate",
  "message0": ".pixelate( x: %1 , y %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "x",
      "value": 20,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "y",
      "value": 20,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "repeatX",
  "message0": ".repeatX( reps: %1 , offset %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "reps",
      "value": 3,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "offset",
      "value": 0,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "repeatY",
  "message0": ".repeatY( reps: %1 , offset %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "reps",
      "value": 3,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "offset",
      "value": 0,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rotate",
  "message0": ".rotate( angle: %1 , speed %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "angle",
      "value": 10,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "speed",
      "value": 0,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "scrollX",
  "message0": ".scrollX( amount: %1 , speed %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "speed",
      "value": 0,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "scrollY",
  "message0": ".scrollY( amount: %1 , speed %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "speed",
      "value": 0,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "scale",
  "message0": ".scale( size: %1 , xMult %2 , yMult %3 )",
  "args0": [
    {
      "type": "field_number",
      "name": "size",
      "value": 1.5,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "xMult",
      "value": 1,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "yMult",
      "value": 1,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "repeat",
  "message0": ".repeat( repeatX: %1 , repeatY %2 , offsetX %3 , offsetY %4 )",
  "args0": [
    {
      "type": "field_number",
      "name": "repeatX",
      "value": 3,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "repeatY",
      "value": 3,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "offsetX",
      "value": 0,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "offsetY",
      "value": 0,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
}, {
	"type": "blendMode",
	"message0": ".blend( %1 mode: %2 %3 , texture: %4 )",
	"args0": [{
			"type": "input_dummy"
		},
		{
			"type": "field_dropdown",
			"name": "mode",
			"options": [
				[
					'darken',
					'darken'
				],
				[
					'multiply',
					'multiply'
				],
				[
					'colorBurn',
					'colorBurn'
				],
				[
					'linearBurn',
					'linearBurn'
				],
				[
					'darkerColor',
					'darkerColor'
				],
				[
					'lighten',
					'lighten'
				],
				[
					'screen',
					'screen'
				],
				[
					'colorDodge',
					'colorDodge'
				],
				[
					'linearDodge',
					'linearDodge'
				],
				[
					'lighterColor',
					'lighterColor'
				],
				[
					'overlay',
					'overlay'
				],
				[
					'softLight',
					'softLight'
				],
				[
					'hardLight',
					'hardLight'
				],
				[
					'vividLight',
					'vividLight'
				],
				[
					'linearLight',
					'linearLight'
				],
				[
					'pinLight',
					'pinLight'
				],
				[
					'hardMix',
					'hardMix'
				],
				[
					'difference',
					'difference'
				],
				[
					'exclusion',
					'exclusion'
				],
				[
					'subtract',
					'subtract'
				],
				[
					'divide',
					'divide'
				],
				[
					'hue',
					'hueBlend'
				],
				[
					'color',
					'colorBlend'
				],
				[
					'saturation',
					'saturationBlend'
				],
				[
					'luminosity',
					'luminosityBlend'
				]
			]
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
	"colour": 180,
	"tooltip": "",
	"helpUrl": ""
},{
  "type": "gammaCorrection",
  "message0": ".gamma( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 0,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "levelsInputRange",
  "message0": ".levelsInput( min: %1, max: %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "min",
      "value": 0,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "max",
      "value": 1,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "levelsOutputRange",
  "message0": ".levelsOutput( min: %1, max: %2 )",
  "args0": [
    {
      "type": "field_number",
      "name": "min",
      "value": 0,
      "precision": 0.01
    },
    {
      "type": "field_number",
      "name": "max",
      "value": 1,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "opacity",
  "message0": ".opacity( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.5,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "hueRotate",
  "message0": ".hueRotate( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.5,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "sepia",
  "message0": ".sepia( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.5,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "grayscale",
  "message0": ".grayscale( amount: %1 )",
  "args0": [
    {
      "type": "field_number",
      "name": "amount",
      "value": 0.5,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
},]);