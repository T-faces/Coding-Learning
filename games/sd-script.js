const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
});

// Definisi blok kustom
Blockly.defineBlocksWithJsonArray([
  {
    type: 'move_forward',
    message0: 'maju satu langkah',
    previousStatement: null,
    nextStatement: null,
    colour: 160,
    tooltip: 'Gerakkan maju',
  },
  {
    type: 'turn_left',
    message0: 'belok kiri',
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'Belok ke kiri',
  },
  {
    type: 'turn_right',
    message0: 'belok kanan',
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'Belok ke kanan',
  }
]);

// Generator kode
Blockly.JavaScript['move_forward'] = function(block) {
  return 'output("Robot maju satu langkah");\n';
};
Blockly.JavaScript['turn_left'] = function(block) {
  return 'output("Robot belok kiri");\n';
};
Blockly.JavaScript['turn_right'] = function(block) {
  return 'output("Robot belok kanan");\n';
};

function output(text) {
  const div = document.getElementById('output');
  div.innerHTML += text + "<br>";
}

function runCode() {
  document.getElementById('output').innerHTML = '';
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    eval(code);
  } catch (e) {
    alert("Terjadi kesalahan dalam kode.");
  }
}
