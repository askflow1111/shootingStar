var xPos = 0;
var yPos = 50;

var balPosX = 1;
var balPosY = 22;

var carPosX = 170;
var carPosY = 390;

var speed = 3;

function setup (){
  createCanvas(650, 400);
}

function draw() {
  
  //star
  
    background(5, 11, 46);
    noStroke();
    fill(241, 245, 10); //starFill
    ellipse(xPos, yPos, 10, 10);//starShape
    xPos+=3;
    yPos+=1;
    
    
    //Ballon
    fill(255, 0, 0);//cabinFill
    rect(balPosX+36,balPosY+8,30,15,2);//ballonCabin
    fill(53, 250, 35);//ballonFill
    ellipse(balPosX + 52,balPosY-2, 60, 30);//ballonBody
    
    if (balPosX >= width || balPosX <= 0) {
      balPosx = speed *= -1;
    }
  
    balPosX = balPosX + speed;
    
    
    //skyElements
    
    strokeWeight(77);//moonStroke
    stroke(255, 255, 255);
    fill(245, 242, 242);
    point(350, 100); //moonPos
    
    //stars
    stroke(250, 226, 10);
    strokeWeight(2);
    point(250, 167); //star1
    point(199, 167); //star2
    point(218, 132); //star3
    point(241, 132); //star
    point(222, 92); //star
    point(157, 132); //star
    point(142, 92); //star
    point(110, 132); //star
    point(167, 105); //star
    point(80, 61); //star
    point(94, 175); //star
    
   
    //mountain
    
    noStroke();
    fill(247, 239, 239);
    triangle(76,54,142,236,4,236);
    
    fill(247, 239, 239);
    triangle(116,54,205,236,28,236);
    
    fill(128, 79, 79);
    triangle(76,94,142,236,4,236);
    
    fill(128, 79, 79);
    triangle(122,115,205,233,4,236);

  //mountain 2
    
    noStroke();
    fill(247, 239, 239);
    triangle(76,54,142,236,4,236);
    
    fill(247, 239, 239);
    triangle(116,54,205,236,28,236);
    
    fill(128, 79, 79);
    triangle(76,94,142,236,4,236);
    
    fill(128, 79, 79);
    triangle(122,115,205,233,4,236);
          
          //mountain 4
    fill(247, 239, 239);
          // topx1y1  x2   y2  x3  y3 __white top2
    triangle(500,94,400,253,605,256);
 
    
    fill(128, 79, 79);
          //topx1y1 Leftx2y2 rightx3 y3 __ mountain base 2
    triangle(500,124,400,253,605,256);

    //mountain 3 
    
     noStroke();
    fill(247, 239, 239);
         //topx1 y1  x2 y2  x3 y3 __white top 1
    triangle(580,104,500,286,640,286);
    
       
    fill(128, 79, 79);
          // x1  y1  x2 y2  x3 y3 __mountain base 1
    triangle(580,144,500,286,640,286);
          



    //wall
    stroke(247, 239, 239);
    fill(94, 60, 60);
    rect(0,350,500,50);
    //wall2
    stroke(247, 239, 239);
    fill(94, 60, 60);
    rect(520,350,160,50);
    
    //fireHydrant
    stroke(3, 3, 3);
    strokeWeight(2);
    fill(242, 5, 5);
    rect(63,382,8,26);
    line(60,386,73,386);
    
    //satelite
    fill(61, 41, 41);
    triangle(320,159,310,190,330,190);//base
    
    fill(218, 227, 186);
    ellipse(319,162,40,30);
    
    stroke(11, 37, 184);
    line(306,167,319,155);//line1
    line(333,168,319,154);//line2
    line(319,169,319,154);//line3
    strokeWeight(6);
    point(319,153);
    
    
    noStroke();
    
    fill(87, 55, 6); //building #2L
    rect(99,217, 150, 200);
    
    fill(143, 135, 135);
    rect(105, 222, 50,50,4); //window #1TopLeft
    rect(163, 222, 80,50,4); //window #2TopRight
    rect(193, 277, 50,50,4); //window #1TopLeft
    rect(105, 277, 80,50,4); //window #2TopRight
    
    rect(110, 362, 30,40, 4);//door leftBuilding
    rect(145, 362, 60, 5, 4);//line rightBuilding
    rect(145, 371, 60, 5, 4);//line rightBuilding
    rect(145, 381, 60, 5, 4);//line rightBuilding
    rect(210, 362, 30,40, 4);//door leftBuilding
    
    
    
    
    
    fill(87,55,6); // building #1R
    rect(254,189,127, 230, 5);
    //windows 
    fill(143, 135, 135);
    rect(261, 198, 50,50,4); //window #1TopLeft
    rect(318, 198, 50,50,4); //window #2TopRight
    rect(261, 298, 50,50,4); //window #1middleLeft
    rect(318, 298, 50,50,4); //window #2MiddleRight
    rect(261, 253, 107, 40, 4); //middleWindow
    rect(270, 362, 30,40, 4);//door leftBuilding
    rect(309, 361, 60, 5, 4);//line rightBuilding
    rect(309, 371, 60, 5, 4);//line rightBuilding
    rect(309, 381, 60, 5, 4);//line rightBuilding
    
    
    fill(17, 64, 21);//treeFill
    ellipse(377, 324, 40,60);//treeOval
    fill(74, 63, 3);//treeBaseFill
    rect(375,353, 5,46);//treeBase
    
    
    fill(17, 64, 21);//treeFill#2
    ellipse(257, 324, 40,60);//treeOval
    fill(74, 63, 3);//treeBaseFill#2
    rect(254,353, 5,46);//treeBase
    

    // CAR
    
    fill(21, 88, 232);
    
    stroke(8, 8, 8);
    strokeWeight(2);
    rect(carPosX, 361,40,20,4);//topCarBody
    rect(carPosX - 20, 372,80,20,4);//bottomCarBody
    noStroke();
    rect(carPosX + 2, 367,37,16,4);//topCarBodyLayer
    

    stroke(3, 3, 3);
    strokeWeight(2);
    fill(255, 0, 0);
    ellipse(carPosX - 2,390,20,20);//leftWheel
    ellipse(carPosX+40,390,20,20);//rightWheel
    
    
    fill(230, 9, 38);//tailLight
    ellipse(carPosX+60,378,10,10);
    
    fill(204, 204, 18);
    rect(carPosX -24, 376,10,10,4);//headLight
    
    noStroke();
    beginShape();
    vertex(carPosX-50, 391,23, 390);
    vertex(carPosX-24,384);
    vertex(carPosX-24, 380);
    vertex(carPosX-50, 373);
    endShape();

    
    
    
    carPosX-=1;
    
};
