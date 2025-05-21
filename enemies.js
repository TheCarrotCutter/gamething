function checkEnemies() {
  toSpawnEnemies.forEach((object) => {
              object.sprite = thisBefore.physics.add.sprite(object.x, object.y, 'circleRedOutline');
              object.sprite.setDisplaySize(28, 28);
              object.sprite.body.setCircle(20, 0, 0);
              object.trail = circleParticle.createEmitter({
                x: 0,
                y: 0,
                speed: 0,
                lifespan: 400,
                quantity: 1,
                alpha: {start: 1, end: 1},
                scale: {start: 0.75, end: 0.05},
                tint: 0xFF0000
              });
              object.trail.startFollow(object.sprite);
              object.sprite.setBounce(1);
              mainPhysicsGroup.add(object.sprite);
  });
}
