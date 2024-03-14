
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('green');
  sc1 = createButton("back");
  sc1.position(200, 200);
  sc1.mousePressed(backMethod);
}


function backMethod(){
  window.open("https://993eaa10-84c2-4ae0-808d-50464aadeae8-00-aqpb5nc204ab.spock.repl.co/", "_self")
}