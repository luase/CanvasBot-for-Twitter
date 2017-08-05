void setup(){
  int res = 16;
  String[] colors = loadStrings("colors.txt");
  
  size(800, 800);
  background(0);
  
  for(int i = 0; i < res; i++){
    for(int j = 0; j < res; j++){
      noStroke();
      fill(unhex(colors[i*16 + j]));
      rect(j*width/res, i*height/res, width/res, height/res);
    }
  }
  
  save("image.png");
  exit();
}