(function(window, _) {
    window.BiggestBird = window.BiggestBird || {
      numz: {
        /**
         * 
         * @param {*} pointA a point on the screen
         * @param {*} pointB a point on the screen
         * @param {number} distanceX is the distance between pointB.x and point A.x 
         * @param {number} distanceY is the distance between pointB.y and point A.y
         * @param {number} radians a number value from the distance in the radians
         * @param {number} degrees calculates a numeric value from radians to degrees 
         * @param {number} degreesToRadians calculates degrees to radians
         * @param {number} radiansToDegrees calculates radians to degrees 
         * @returns {number} the degrees 
         * 
         */
        getAngleDegrees( pointA, pointB) {
          const 
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          radians = Math.atan2(distanceY, distanceX),
          degrees = radians * 180 / Math.PI;
          return degrees;

        },
        /**
         *  @param {number} degreesToRadians calculates degrees to radians
         * @param {*} degrees a number
         * 
         * @returns {number} the radian
         */
          degreesToRadians(degrees) {
            return degrees * Math.PI / 180;
          },
          /**
           * @param {number} radiansToDegrees calculates radians to degrees 
           * @param {*} radians the distance as a single number 
           * @returns {number} degrees 
           */
          radiansToDegrees(radians) {
            return radians * 180 / Math.PI;
          },

      },
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