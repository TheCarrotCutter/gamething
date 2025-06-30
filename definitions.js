// ------------ //
// STYLEGROUNDS //
// ------------ //

export function loadStyleGround(scene, styleGround) {
  if (styleGround) {
    if (styleGround === 'stars') {
      scene.add.particles(0, 0, 'imageCircle', {
        x: () => Phaser.Math.Between(0, scene.scale.width),
        y: () => Phaser.Math.Between(0, scene.scale.height),
        speed: 0,
        lifespan: 2000,
        quantity: 1,
        scale: { start: 0.1, end: 0.05 },
        alpha: { start: 0.5, end: 0 },
      });
    }
    if (styleGround === 'smallStars') {
      let p = scene.add.particles(0, 0, 'imageCircle', {
        x: () => Phaser.Math.Between(0, scene.scale.width),
        y: () => Phaser.Math.Between(0, scene.scale.height),
        speed: 0,
        lifespan: 20000000000,
        quantity: 0,
        frequency: 100,
        scale: 0.05,
        alpha: 0.3
      });
      p.explode(1000)
    }
  }
}
