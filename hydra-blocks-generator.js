function code(block, args) {
  return `${block.hue_ === 230 ? '' : '.'}${block.type}(${args.join(',')})`
}

window.webcamIndex = null
Blockly.JavaScript['webcam'] = function(block) {
  var dropdown_buffer = block.getFieldValue('buffer');
  window.webcamIndex = dropdown_buffer
  return `src(s3)`
};

Blockly.JavaScript['osc'] = function(block) {
  var args = [
    block.getFieldValue('frequency'),
    block.getFieldValue('sync'),
    block.getFieldValue('offset'),
  ]
  return code(block, args);
};

Blockly.JavaScript['out'] = function(block) {
  var args = [
    block.getFieldValue('buffer'),
  ]
  return code(block, args);
};

Blockly.JavaScript['noise'] = function(block) {
  var args = [
    block.getFieldValue('scale'),
    block.getFieldValue('offset'),
  ]
  return code(block, args);
};

Blockly.JavaScript['shape'] = function(block) {
  var args = [
    block.getFieldValue('sides'),
    block.getFieldValue('radius'),
    block.getFieldValue('smoothing'),
  ]
  return code(block, args);
};

Blockly.JavaScript['solid'] = function(block) {
  var args = [
    block.getFieldValue('r'),
    block.getFieldValue('g'),
    block.getFieldValue('b'),
    block.getFieldValue('a'),
  ]
  return code(block, args);
};

Blockly.JavaScript['voronoi'] = function(block) {
  var args = [
    block.getFieldValue('scale'),
    block.getFieldValue('speed'),
    block.getFieldValue('blending'),
  ]
  return code(block, args);
};

Blockly.JavaScript['gradient'] = function(block) {
  var args = [
    block.getFieldValue('speed'),
  ]
  return code(block, args);
};

Blockly.JavaScript['add'] = function(block) {
  var args = [
    Blockly.JavaScript.statementToCode(block, 'texture'),
    block.getFieldValue('amount'),
  ]
  return code(block, args);
};

Blockly.JavaScript['blend'] = function(block) {
  var args = [
    Blockly.JavaScript.statementToCode(block, 'texture'),
    block.getFieldValue('amount'),
  ]
  return code(block, args);
};

Blockly.JavaScript['mult'] = function(block) {
  var args = [
    Blockly.JavaScript.statementToCode(block, 'texture'),
    block.getFieldValue('amount'),
  ]
  return code(block, args);
};

Blockly.JavaScript['mask'] = function(block) {
  var args = [
    Blockly.JavaScript.statementToCode(block, 'texture'),
    block.getFieldValue('reps'),
    block.getFieldValue('offset'),
  ]
  return code(block, args);
};

Blockly.JavaScript['layer'] = function(block) {
  var args = [
    Blockly.JavaScript.statementToCode(block, 'texture'),
  ]
  return code(block, args);
};

Blockly.JavaScript['diff'] = function(block) {
  var args = [
    Blockly.JavaScript.statementToCode(block, 'texture'),
  ]
  return code(block, args);
};
Blockly.JavaScript['brightness'] = function(block) {
  var args = [
    block.getFieldValue('amount'),
  ]
  return code(block, args);
};

Blockly.JavaScript['contrast'] = function(block) {
  var args = [
    block.getFieldValue('amount'),
  ]
  return code(block, args);
};

Blockly.JavaScript['colorama'] = function(block) {
  var args = [
    block.getFieldValue('amount'),
  ]
  return code(block, args);
};

Blockly.JavaScript['invert'] = function(block) {
  var args = [
    block.getFieldValue('amount'),
  ]
  return code(block, args);
};

Blockly.JavaScript['saturate'] = function(block) {
  var args = [
    block.getFieldValue('amount'),
  ]
  return code(block, args);
};

Blockly.JavaScript['thresh'] = function(block) {
  var args = [
    block.getFieldValue('threshold'),
    block.getFieldValue('tolerance'),
  ]
  return code(block, args);
};

Blockly.JavaScript['posterize'] = function(block) {
  var args = [
    block.getFieldValue('bins'),
    block.getFieldValue('gamma'),
  ]
  return code(block, args);
};

Blockly.JavaScript['luma'] = function(block) {
  var args = [
    block.getFieldValue('threshold'),
    block.getFieldValue('tolerance'),
  ]
  return code(block, args);
};

Blockly.JavaScript['color'] = function(block) {
  var args = [
    block.getFieldValue('r'),
    block.getFieldValue('g'),
    block.getFieldValue('b'),
  ]
  return code(block, args);
};

Blockly.JavaScript['shift'] = function(block) {
  var args = [
    block.getFieldValue('r'),
    block.getFieldValue('g'),
    block.getFieldValue('b'),
    block.getFieldValue('a'),
  ]
  return code(block, args);
};

Blockly.JavaScript['kaleid'] = function(block) {
  var args = [
    block.getFieldValue('nSides'),
  ]
  return code(block, args);
};

Blockly.JavaScript['pixelate'] = function(block) {
  var args = [
    block.getFieldValue('x'),
    block.getFieldValue('y'),
  ]
  return code(block, args);
};

Blockly.JavaScript['repeatX'] = function(block) {
  var args = [
    block.getFieldValue('reps'),
    block.getFieldValue('offset'),
  ]
  return code(block, args);
};

Blockly.JavaScript['repeatY'] = function(block) {
  var args = [
    block.getFieldValue('reps'),
    block.getFieldValue('offset'),
  ]
  return code(block, args);
};

Blockly.JavaScript['rotate'] = function(block) {
  var args = [
    block.getFieldValue('angle'),
    block.getFieldValue('speed'),
  ]
  return code(block, args);
};

Blockly.JavaScript['scrollX'] = function(block) {
  var args = [
    block.getFieldValue('amount'),
    block.getFieldValue('speed'),
  ]
  return code(block, args);
};

Blockly.JavaScript['scrollY'] = function(block) {
  var args = [
    block.getFieldValue('amount'),
    block.getFieldValue('speed'),
  ]
  return code(block, args);
};

Blockly.JavaScript['scale'] = function(block) {
  var args = [
    block.getFieldValue('size'),
    block.getFieldValue('xMult'),
    block.getFieldValue('yMult'),
  ]
  return code(block, args);
};

Blockly.JavaScript['repeat'] = function(block) {
  var args = [
    block.getFieldValue('repeatX'),
    block.getFieldValue('repeatY'),
    block.getFieldValue('offsetX'),
    block.getFieldValue('offsetY'),
  ]
  return code(block, args);
};

Blockly.JavaScript['blendMode'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  var texture = Blockly.JavaScript.statementToCode(block, 'texture');
  return `.${dropdown_mode}(${texture})`;
};

Blockly.JavaScript['gammaCorrection'] = function(block) {
  var args = [
    block.getFieldValue('amount'),
  ]
  return code(block, args);
};

Blockly.JavaScript['levelsInputRange'] = function(block) {
  var args = [
    block.getFieldValue('min'),
    block.getFieldValue('max'),
  ]
  return code(block, args);
};

Blockly.JavaScript['levelsOutputRange'] = function(block) {
  var args = [
    block.getFieldValue('min'),
    block.getFieldValue('max'),
  ]
  return code(block, args);
};