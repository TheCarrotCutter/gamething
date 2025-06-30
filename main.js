// ----------------- //
// IMPORT NECECETIES //
// ----------------- //

import { player, createPlayer, updatePlayer } from './player.js';

import { generateTextures } from './images.js';

import { loadStyleGround } from './definitions.js';

// export thisBefore

export let thisBefore;

// ------------------ //
// PHASER GAME SETUPS //
// ------------------ //

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  resolution: 1,   
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
  var effect = camera.postFX.addGlow(0xFFFFFF, 2, 1, 0, 1, 4);
//var effect = camera.postFX.addGlow(color, outerStrength, innerStrength, knockout, quality, distance);


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
  loadStyleGround(scene, 'smallStars');
  //loadStyleGround(scene, 'stars');
}
