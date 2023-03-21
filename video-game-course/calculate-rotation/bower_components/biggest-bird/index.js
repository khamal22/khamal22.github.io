(function(window, _) {
    window.BiggestBird = window.BiggestBird || {
      numz: {},
      phyz: {


        /**
         * 
         * @param {object} pointA a point on the screen
         * @param {object} pointB a point on the screen
         * @param {number} pointB.x x value of point b
         * @param {number} pointA.x x value of point a 
         * @param {number} pointB.y y value of point b
         * @param {number} pointA.y y value of point a
         * 
         * 
         * 
         * @returns {number} the distance 
         */




       getDistance(pointA, pointB){
          const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          return distance;
       }

      },
    };
  }(window, window._));