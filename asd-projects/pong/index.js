/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
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
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();
  console.log(BOARD_HEIGHT, BOARD_WIDTH);


  // Game Item Objects
  function factory(id) {

    var obj = {};
    obj.id = id;
    obj.x = parseFloat($(id).css("left"));
    obj.y = parseFloat($(id).css("top"));
    obj.width = $(id).width();
    obj.height = $(id).height();
    // lets me know the diretcion of the ball
    obj.speedX = 0;
    obj.speedY = 0;

    return obj;
  }
  var ball = factory('#ball');

  var rPad = factory('#rightPaddle');

  var lPad = factory("#leftPaddle");

  console.log(rPad,lPad,ball);



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
    // repositoning each game item every new game
    repositonGameItem(rPad);
    repositonGameItem(lPad);
    repositonGameItem(ball);

    keepInBounds(rPad);
    keepInBounds(lPad);
    //
    redrawDrawItem(rPad);
    redrawDrawItem(lPad);
    redrawDrawItem(ball);
    //

    doCollide(rPad, ball);
    doCollide(lPad, ball);
    // 
    bounce();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.up) {
      rPad.speedY = -10;
    }
    else if (event.which === KEY.down) {
      rPad.speedY = 10;
    }
    else if (event.which === KEY.w) {
      lPad.speedY = -10;
    }
    else if (event.which === KEY.s) {
      lPad.speedY = 10;
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
    else if (event.which === KEY.s) {

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
  function repositonGameItem(obj) {
    obj.x += obj.speedX;
    obj.y += obj.speedY;
    // lPad.x += lPad.speedX;
    // lPad.y += lPad.speedY;
    // ball.x += ball.speedX;
    // ball.y += ball.speedY;

  }
  // these lines of code allow the dot to move around along the x and y axis  
  function redrawDrawItem(obj) {
    $(obj.id).css("top", obj.y);
    $(obj.id).css("left", obj.x);
    // $(obj.id).css('top', rPad.y);
    // $('#rightPaddle').css("left", rPad.x);
    // $('#ball').css("top", ball.x);
    // $("#ball").css("left", ball.y);


  }

  function startBall() {
    ball.speedX = randomNum = (Math.random() * 5 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = randomNum = (Math.random() * 5 + 2) * (Math.random() > 0.5 ? -1 : 1);

    ball.x = 385
    ball.y = 385

  }

  function keepInBounds(obj) {

    // allows paddles to stay in bounds
    obj.y = Math.min(obj.y, BOARD_HEIGHT - obj.height);
    obj.y = Math.max(obj.y, 0);

    // obj.leftX = obj.x;
    // obj.topY = obj.y;
    // obj.rightX = obj.x + obj.width;
    // obj.bottomY = obj.y + obj.height;


  }
  function doCollide(obj1, obj2) {
    // TODO: calculate and store the remaining
    // sides of the obj1
    obj1.leftX = obj1.x;
    obj1.topY = obj1.y;
    obj1.rightX = obj1.x + obj1.width;
    obj1.bottomY = obj1.y + obj1.height;

    // TODO: Do the same for obj2
    obj2.leftX = obj2.x;
    obj2.topY = obj2.y;
    obj2.rightX = obj2.x + obj2.width;
    obj2.bottomY = obj2.y + obj2.height;

    // TODO: Return true if they are overlapping, false otherwise
    if (obj1.leftX < obj2.rightX &&
      obj1.rightX > obj2.leftX &&
      obj1.topY < obj2.bottomY &&
      obj1.bottomY > obj2.topY) {
        console.log("collision detection")

        // obj2.speedY *= -1;
        //the ball movement switches when colliding with the paddles from left to right
        obj2.speedX *= -1;
      }
      
    }
    // allows ball to bounce off walls 
    function bounce(){
      if ( ball.y < 0 || ball.y > BOARD_HEIGHT - ball.height ){
        ball.speedY *= -1;
      }
      else if (ball.x < 0) {          //left
        startBall();
    }
      else if (ball.x > BOARD_WIDTH - ball.width ){
       startBall();
      }

    }
    

}
