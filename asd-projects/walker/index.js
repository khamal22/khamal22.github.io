/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  var KEY = {
    "left": 37,
    "right": 39,
    "up": 38,
    "down": 40,
  }

  var locationX = 0;
  var locationY = 0;
  var speedX = 0;
  var speedY = 0;

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {


  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.left) {
      console.log("left pressed");
    }
    else if (event.which === KEY.right) {
      console.log("right pressed");
    }
    else if (event.which === KEY.up) {
      console.log("up pressed");
    }
    else if (event.which === KEY.down) {
      console.log("down pressed")
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
  function repositonGameItem() {
    locationX += speedX;
    locationY += speedY;
  }
  function redrawDrawItem() {
 $("#box").css("left", locationX);
  }


}
