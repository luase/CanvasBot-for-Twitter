void setup(){
  int res = 16;
  
  size(800, 800);
  background(0);
  
  for(int i = 0; i < res; i++){
    for(int j = 0; j < res; j++){
      float r = random(0, 255);
      float g = random(0, 255);
      float b = random(0, 255);
      noStroke();
      fill(r,g,b);
      rect(j*width/res, i*height/res, width/res, height/res);
    }
  }
  
  save("image.png");
  exit();
}