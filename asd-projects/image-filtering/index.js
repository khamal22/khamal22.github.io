// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function () {
    const $display = $('#display');

    // Multiple TODOs: Call your apply function(s) here
    applyFilter(reddify);
    applyFilterNoBackground(decreaseBlue);
    applyFilterNoBackground(increaseGreenByBlue);
    




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {

    for (var i = 0; i < image.length; i++) {

        var row = image[i]

        for (var j = 0; j < row.length; j++) {

            // grabing values from array
            // ex "rgb(150, 150, 150)"
            var rgbstring = image[i][j]

            //converts a string to an array
            var rgbNumbers = rgbStringToArray(rgbstring);

            //changes the value of the colors
            filterFunction(rgbNumbers);

            // converts array to string
            image[i][j] = rgbArrayToString(rgbNumbers);
        }

    }


}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {


    var backgroundColor = image[0][0];

    for (var i = 0; i < image.length; i++) {

        var row = image[i]

        for (var j = 0; j < row.length; j++) {

            // if statement to make sure the code only changes the mario.

            if (image[i][j] !== backgroundColor ) {
                // grabing values from array
                // ex "rgb(150, 150, 150)"
                var rgbstring = image[i][j]

                //converts a string to an array
                var rgbNumbers = rgbStringToArray(rgbstring);

                //changes the value of the colors
                filterFunction(rgbNumbers);

                // converts array to string
                image[i][j] = rgbArrayToString(rgbNumbers);
            }

        }

    }


}

// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
    if (num < 0) {
        return 0;

    }
    else if (num > 255) {
        return 255;
    }
    else {
        return num;
    }

}


// TODO 3: Create reddify function
function reddify(arr) {
    arr[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(arr) {
    arr[BLUE] = keepInBounds(arr[BLUE] - 50);
}

function increaseGreenByBlue(arr) {
    arr[GREEN] = keepInBounds(arr[BLUE] + arr[GREEN]);
}

// CHALLENGE code goes below here
