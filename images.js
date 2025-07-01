// ------------------- //
// GENERATING TEXTURES //
// ------------------- //

let imageGenerator;

export function generateTextures(scene) {
  console.log("Generating Textures...")
  
  imageGenerator = scene.add.graphics();


  imageGenerator.fillStyle(0xffffff, 1);
  imageGenerator.fillCircle(40, 40, 40);
  imageGenerator.generateTexture('imageCircle', 80, 80); // always make the generate coords double those of the graphics coords
  imageGenerator.clear();
            
  imageGenerator.fillStyle(0xff0000, 1)
  imageGenerator.fillCircle(20, 20, 20);
  imageGenerator.fillStyle(0xffffff, 1)
  imageGenerator.fillCircle(20, 20, 18);
  imageGenerator.generateTexture('circleRedOutline', 40, 40);
  imageGenerator.clear();
  console.log("Textures Succesfully Generated!")
}
