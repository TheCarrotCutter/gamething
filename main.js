// ----------------- //
// IMPORT NECECETIES //
// ----------------- //

import { player, createPlayer, updatePlayer } from './player.js';

import { generateTextures } from './images.js';

// export thisBefore

export let thisBefore;

// ------------------ //
// PHASER GAME SETUPS //
// ------------------ //

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

console.log('Phaser version:', Phaser.VERSION);

// ----------- //
// MISC SETUPS //
// ----------- //

let gameCanvas = game.canvas

// --------------- //
// SCENE FUNCTIONS //
// --------------- //

function preload() {
  
}

function create() {
  // ------------- //
  // CREATE() SETUPS //
  // ------------- //
  
  let camera = this.cameras.main
  var effect = camera.postFX.addBloom(0xFFFFFF, 0, 0, 1, 1, 4);

  generateTextures(this);
  
  thisBefore = this;
  
  
  this.input.on('pointerdown', () => {
  gameCanvas.requestPointerLock();
  });
  
  // ---------- //
  // LOAD LEVEL //
  // ---------- //
  
  loadLevel(this, 3)
  
}
function update() {
  updatePlayer();
}
// ---------- //
// LOAD LEVEL //
// ---------- //

function loadLevel(scene, level) {
  createPlayer(scene, 300, 300);
}
