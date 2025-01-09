let loadedTable = null; 
let w = 800; //width
let h = 800; //height
let quote;
let course;
var rSel
let a = 0;
let b = 0;


function preload(){
  table = loadTable('CourseEvaluations.csv', 'csv');
  quote = loadFont('IBMPlexMono-Bold.otf');
  course = loadFont('IBMPlexMono-Regular.otf');
  clouds = loadImage('clouds.jpg');
  wind = createAudio('wind.m4a');
  wind1 = createAudio('wind1.m4a');
  wind2 = createAudio('wind2.m4a');
  
  
}
  
function setup() { 
  
  createCanvas(windowWidth, windowHeight);
  
  var r = table.getRowCount() - 1;
  var c = table.getColumnCount() - 1
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print( 'row value = ' + r)
  print( 'column value = ' + c)
  
  rSel = floor(random(r));
  print(rSel);
  
} 

function draw(){
  
  frameRate(10);
  textAlign(CENTER, CENTER);

 
  
  if(a<11){
    
    wind.play()
    
    imageMode(CENTER);
    var imgH = 3000
    var imgW = imgH * 1.773835920177384;
    image(clouds, (windowWidth/2)-1000+(100*a), windowHeight/2, imgW, imgH);

    var txt = table.getString(rSel, 0)
    var txtL = txt.length
    print(txt.length);

    var qWidth = map(txtL, 0, 1200, 300, 700);
    print('text box width is ' + qWidth + ' pixels');
    var qHeight = map(txtL, 0, 1200, 400, 700);
    print('text box height is ' + qHeight + ' pixels');
    var qTxt = map(txtL, 0, 1000, 30, 20);
    var x = (windowWidth-qWidth)/2
    var y = (windowHeight-qHeight)/2

    fill(0, a*25.5);
  
  print('b = ' + b);
    
  if(b==0){
    textSize(16);
    textLeading(12);
    textFont(quote);

    text("click for more student feedback", windowWidth/2, 50);
    }
    
    push();
    scale(.1*a);
    
    textSize(18);
    textLeading(24);
    textFont(quote);

    text(txt, x, y-50, qWidth, qHeight);
    pop();

    textSize(16);
    textLeading(16);
    textFont(quote);

    text(table.getString(rSel, 2) + ', ' + table.getString(rSel, 3) + '\n' +   table.getString(rSel, 1), windowWidth/2, windowHeight-75);
      
    a = a+1;
    print('a = ' + a)
  }else{

  }
}

function windowResized() {
  
  createCanvas(windowWidth, windowHeight);

  var r = table.getRowCount() - 1;
  var c = table.getColumnCount() - 1
  
  rSel = floor(random(r));
  print(rSel);
  
  b=0;
  a = 0;
  loop();
  
}

function mouseClicked() {
  
  var r = table.getRowCount() - 1;
  var c = table.getColumnCount() - 1
  
  rSel = floor(random(r));
  print(rSel);
  
  a = 0;
  b=1;
  
  
  loop();
  
  
}

function mousePressed() {
  
}
