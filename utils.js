// ---------------- //
// HELPER FUNCTIONS //
// ---------------- //

// find distance between 2 vectors limited to a distance
export function getDirectionVector(start, end, length) {
  return end.clone()
  .subtract(start)
  .normalize()
  .scale(length);
}

// launch an object by adding velocity in a direcion
export function launchToObject(object, target, speed) {
  let launchVector = 
    getDirectionVector(
      new Phaser.Math.Vector2(object.x, object.y),
      new Phaser.Math.Vector2(target.x, target.y),
      speed
    )
        
  object.body.velocity.x += move.x
  object.body.velocity.y += move.y
}
