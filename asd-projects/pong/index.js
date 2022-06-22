/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    s: 83,
    w: 87,
    up: 38,
    down: 40,
  }
  
  
  
  // Game Item Objects
  function factory(id){
   
    var obj = {};
    obj.id = id;
    obj.x = parseFloat($(id).css("left"));
    obj.y = parseFloat($(id).css("top"));
    obj.width = $(id).width();
    obj.height = $(id).height();
    obj.speedX = 0;
    obj.speedY = 0;
    
    return obj;
  }
  var  ball = factory('#ball');

  var rPad = factory('#rightPaddle');

  var lPad = factory("#leftPaddle");

  // console.log(rPad,lPad,);



  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  // $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);
  startBall();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositonGameItem();
    redrawDrawItem();
    
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event){
    if (event.which === KEY.up){
      rPad.speedY = -5;
    }
    else if (event.which === KEY.down){
      rPad.speedY = 5;
    }
    else if (event.which === KEY.w){
      lPad.speedY = -5;
    }
    else if (event.which === KEY.s){
      lPad.speedY = 5;
    }
  }
  
  function handleKeyUp(event) {
   if (event.which === KEY.up) {
      
      rPad.speedY = 0;
    }
    else if (event.which === KEY.down) {
      
      rPad.speedY = 0;
    }
    else if (event.which === KEY.w) {
    
      lPad.speedY = 0;
    }
    else if ( event.which === KEY.s) {
    
      lPad.speedY = 0;
    }
  }



 
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
// these lines of code updates the gameitem locatin based on the speed  
function repositonGameItem() {
  rPad.x += rPad.speedX;
  rPad.y += rPad.speedY;
  lPad.x += lPad.speedX;
  lPad.y += lPad.speedY;
  
}
 // these lines of code allow the dot to move around along the x and y axis  
 function redrawDrawItem() {
  $("#leftPaddle").css("left", lPad.x);
  $('#rightPaddle').css('top', rPad.y);
  $('#rightPaddle').css("left", rPad.x);
  $("#leftPaddle").css( "top", lPad.y);

  
}

function startBall(){
}

  
}
