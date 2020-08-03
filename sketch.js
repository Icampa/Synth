var note;
var a;
var f;
var t;
var X;
var Y;


var wave;
var button;
var playing;
var slider;
var freq;

let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup(){
	createCanvas(windowWidth, windowHeight);
	note = new p5.Oscillator();
	X = 0
	Y = 0   

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
 
    translate(width/4.3, height/2.5);
  
	noFill();
    clear();
    strokeWeight(.5);
    stroke(0);
  
  //Number Keys
    push();
    if (key == '1'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X, Y, 65, 75);
    rect(X+5, Y+10, 55, 55);
    line(X, Y, X+5, Y+10);
    line(X, Y+75, X+5, Y+65);
    line(X+65, Y, X+60, Y+10);
    line(X+65, Y+75, X+60, Y+65);
    pop();

    push();
    if (key == '2'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+100, Y, 65, 75);
    rect(X+105, Y+10, 55, 55);
    line(X+100, Y, X+105, Y+10);
    line(X+100, Y+75, X+105, Y+65);
    line(X+165, Y, X+160, Y+10);
    line(X+165, Y+75, X+160, Y+65);
    pop();
    
    push();
    if (key == '3'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+200, Y, 65, 75);
    rect(X+205, Y+10, 55, 55);
    line(X+200, Y, X+205, Y+10);
    line(X+200, Y+75, X+205, Y+65);
    line(X+265, Y, X+260, Y+10);
    line(X+265, Y+75, X+260, Y+65);
    pop();

    push();
    if (key == '4'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+300, Y, 65, 75);
    rect(X+305, Y+10, 55, 55);
    line(X+300, Y, X+305, Y+10);
    line(X+300, Y+75, X+305, Y+65);
    line(X+365, Y, X+360, Y+10);
    line(X+365, Y+75, X+360, Y+65);
    pop();
    
    push();
    if (key == ' '){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+400, Y, 365, 75);
    rect(X+405, Y+10, 355, 55);
    line(X+400, Y, X+405, Y+10);
    line(X+400, Y+75, X+405, Y+65);
    line(X+765, Y, X+760, Y+10);
    line(X+765, Y+75, X+760, Y+65);
    pop();
    
    push();
    if (key == 'a'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X, Y+100, 65, 75);
    rect(X+5, Y+110, 55, 55);
    line(X, Y+100, X+5, Y+110);
    line(X, Y+175, X+5, Y+165);
    line(X+65, Y+100, X+60, Y+110);
    line(X+65, Y+175, X+60, Y+165);
    pop();

    push();
    if (key == 's'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+100, Y+100, 65, 75);
    rect(X+105, Y+110, 55, 55);
    line(X+100, Y+100, X+105, Y+110);
    line(X+100, Y+175, X+105, Y+165);
    line(X+165, Y+100, X+160, Y+110);
    line(X+165, Y+175, X+160, Y+165);
    pop();
    
    push();
    if (key == 'd'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+200, Y+100, 65, 75);
    rect(X+205, Y+110, 55, 55);
    line(X+200, Y+100, X+205, Y+110);
    line(X+200, Y+175, X+205, Y+165);
    line(X+265, Y+100, X+260, Y+110);
    line(X+265, Y+175, X+260, Y+165);
    pop();
    
    push();
    if (key == 'f'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+300, Y+100, 65, 75);
    rect(X+305, Y+110, 55, 55);
    line(X+300, Y+100, X+305, Y+110);
    line(X+300, Y+175, X+305, Y+165);
    line(X+365, Y+100, X+360, Y+110);
    line(X+365, Y+175, X+360, Y+165);
    pop();
    
    push();
    if (key == 'g'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+400, Y+100, 65, 75);
    rect(X+405, Y+110, 55, 55);
    line(X+400, Y+100, X+405, Y+110);
    line(X+400, Y+175, X+405, Y+165);
    line(X+465, Y+100, X+460, Y+110);
    line(X+465, Y+175, X+460, Y+165);
    pop();
    
    push();
    if (key == 'h'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+500, Y+100, 65, 75);
    rect(X+505, Y+110, 55, 55);
    line(X+500, Y+100, X+505, Y+110);
    line(X+500, Y+175, X+505, Y+165);
    line(X+565, Y+100, X+560, Y+110);
    line(X+565, Y+175, X+560, Y+165);
    pop();
    
    push();
    if (key == 'j'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+600, Y+100, 65, 75);
    rect(X+605, Y+110, 55, 55);
    line(X+600, Y+100, X+605, Y+110);
    line(X+600, Y+175, X+605, Y+165);
    line(X+665, Y+100, X+660, Y+110);
    line(X+665, Y+175, X+660, Y+165);
    pop();
    
    push();
    if (key == 'k'){	// set the note type to sine
	fill(255,232,5);
    }
    rect(X+700, Y+100, 65, 75);
    rect(X+705, Y+110, 55, 55);
    line(X+700, Y+100, X+705, Y+110);
    line(X+700, Y+175, X+705, Y+165);
    line(X+765, Y+100, X+760, Y+110);
    line(X+765, Y+175, X+760, Y+165);
    pop();
    

    push();
    fill(0);
    textFont('fivo_sans_modernregular');
  	textSize(15);
    text('1', X+27, Y+55);
    text('2', X+127, Y+55);
    text('3', X+227, Y+55);
    text('4', X+327, Y+55);
    text('STOP', X+550, Y+43);
	text('A', X+27, Y+155);
	text('S', X+127, Y+155);
	text('D', X+227, Y+155);
	text('F', X+327, Y+155);
	text('G', X+427, Y+155);
	text('H', X+527, Y+155);
	text('J', X+627, Y+155);
	text('K', X+727, Y+155);
    pop();
    
    push();
    textSize(12);
    textFont('fivo_sans_modernregular');
    if (key == 'a'){	// set the note type to sine
	fill(0);} else{
    fill(255,232,5); 
    }
    text('DO', X+12, Y+126);
    pop();
    
    push();
    textSize(12);
    textFont('fivo_sans_modernregular');
    if (key == 's'){	// set the note type to sine
	fill(0);} else{
    fill(255,232,5); 
    }
    text('RE', X+112, Y+126);
    pop();
    
    push();
    textSize(12);
    textFont('fivo_sans_modernregular');
    if (key == 'd'){	// set the note type to sine
	fill(0);} else{
    fill(255,232,5); 
    }
    text('MI', X+212, Y+126);
    pop();
    
    push();
    textSize(12);
    textFont('fivo_sans_modernregular');
    if (key == 'f'){	// set the note type to sine
	fill(0);} else{
    fill(255,232,5); 
    }
    text('FA', X+312, Y+126);
    pop();
    
    push();
    fill(0, 0, 255);
    textSize(12);
    textFont('fivo_sans_modernregular');
    if (key == 'g'){	// set the note type to sine
	fill(0);} else{
    fill(255,232,5); 
    }
    text('SOL', X+412, Y+126);
    pop();
    
    push();
    textSize(12);
    textFont('fivo_sans_modernregular');
    if (key == 'h'){	// set the note type to sine
	fill(0);} else{
    fill(255,232,5); 
    }
    text('LA', X+512, Y+126);
    pop();
    
    push();
    textSize(12);
    textFont('fivo_sans_modernregular');
    if (key == 'j'){	// set the note type to sine
	fill(0);} else{
    fill(255,232,5); 
    }
    text('SI', X+612, Y+126);
    pop();
    
    push();
    textSize(12);
    textFont('fivo_sans_modernregular');
    if (key == 'k'){	// set the note type to sine
	fill(0);} else{
    fill(255,232,5); 
    }
    text('DO+', X+712, Y+126);
    pop();
    
    push();
    noFill();
    strokeWeight(1);
    stroke(255,232,5);
    //sine sign
    push();
    if (key == '1'){	// set the note type to sine
	stroke(0);} else{
    stroke(255,232,5); 
    }
    arc(X+22, Y+13, 25, 40, PI+4, PI);
    arc(X+41, Y+39, 25, 40, PI+1, PI+3);
    pop();
    
    //square sign
    push();
    if (key == '2'){	// set the note type to sine
	stroke(0);} else{
    stroke(255,232,5); 
    }
    line(X+112, Y+37, X+112, Y+17);
    line(X+112, Y+17, X+132, Y+17);
    line(X+132, Y+37, X+132, Y+17);
    line(X+132, Y+37, X+152, Y+37);
    line(X+152, Y+17, X+152, Y+37);
    pop();
    
    //triangle sign
    push();
    if (key == '3'){	// set the note type to sine
	stroke(0);} else{
    stroke(255,232,5); 
    }
    line(X+212, Y+17, X+226, Y+37);
    line(X+226, Y+37, X+236, Y+17);
    line(X+236, Y+17, X+253, Y+37);
    pop();
    
    //sawtooth sign
    push();
    if (key == '4'){	// set the note type to sine
	stroke(0);} else{
    stroke(255,232,5); 
    }
    line(X+312, Y+40, X+334, Y+17);
    line(X+334, Y+40, X+334, Y+17);
    line(X+334, Y+40, X+352, Y+17);
    pop();
    
    
    
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function keyTyped() {
		if(keyIsPressed === true){
	note.start();
		}

    
	if (key == '1'){	// set the note type to sine
	t = 'sine'
	a = .4
}	
  
	if (key == '2'){	// set the note type to square
	t = 'square'
	a = 0.08
}	
  
	if (key == '3'){	// set the note type to triangle
	t = 'triangle'
	a = 0.4
}	
  
	if (key == '4'){	// set the note type to sawtooth
	t = 'sawtooth'
	a= 0.09
} 
    
	note.freq(f);
	note.setType(t);
	note.amp(a);
	fill(0);
  
	if (key == 'a'){	//define the Do key
	f = 262
} 		
	if (key == 's'){	//define the Re key
	f = 294
}		
	if (key =='d'){	//define the Mi key
	f = 329
} 	
	if (key == 'f'){	//define the Fa key
	f = 349
}
	if (key =='g'){	//define the Sol key
	f = 392
} 
	if (key == 'h'){	//define the La key
	f = 440
} 
	if (key == 'j'){	//define the Si key
	f = 493
} 
	if (key == 'k'){	//define the Do+ key
	f = 523
}
    
	if (key == ' '){	//define the Do+ key
	note.stop();
}

  
////////////////////////////remainderkeys  
  
	if (key == 'q'){
	stop();
}
  	if (key == 'w'){
	stop();
} 
  	if (key == 'r'){
	stop();
} 
  	if (key == 't'){
	stop();
} 
  	if (key == 'y'){
	stop();
} 
  	if (key == 'u'){
	stop();
} 
  	if (key == 'i'){
	stop();
}  
  	if (key == 'o'){
	stop();
} 
  	if (key == 'p'){
	stop();
} 
  	if (key == 'z'){
	stop();
} 
  	if (key == 'x'){
	stop();
} 
  	if (key == 'c'){
	stop();
} 
  	if (key == 'v'){
	stop();
} 
  	if (key == 'l'){
	stop();
} 
  	if (key == 'b'){
	stop();
} 
  	if (key == 'n'){
	stop();
} 
  	if (key == 'm'){
	stop();
} 
////////////////////////////remainderkeys  

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


