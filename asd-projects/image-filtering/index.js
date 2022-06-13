// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function () {
    const $display = $('#display');

    // Multiple TODOs: Call your apply function(s) here
    applyFilter(reddify);




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {

    for (var i = 0; i < image.length; i++) {
       
        var row = image[i]

        for (var j = 0; j < row.length; j++){
            
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


// TODO 5: Create the keepInBounds function


// TODO 3: Create reddify function
    function reddify(arr){
        arr[RED] = 200
    }

// TODO 6: Create more filter functions


// CHALLENGE code goes below here
