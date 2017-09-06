$(function() {
    'use strict';

    // DOM pointers
    const canvasEl  = $('#pixel_canvas');
    const submitBtn = $('#input_submit');


    // Set color
    function setColor() {
        let colorVal = $('#colorPicker').val();
        return colorVal;
    }

    // Create grid
    function makeGrid() {

        // Get current input values
        let width  = $('#input_width').val();
        let height = $('#input_height').val();

        // Iterate and append newly created elements
        for (let row = 0; row < height; row++) {
            let trEl = $('<tr></tr>');

            for (let col = 0; col < width; col++) {
                let tdEl = $('<td></td>');
                $(trEl).append(tdEl);

                // Event listener that sets background-color for each pixel
                $(tdEl).click(function() {
                    tdEl.css('background-color', setColor());
                });
            }
            $(canvasEl).append(trEl);
        }
    }

    // Event listener that invokes makeGrid() function
    $(submitBtn).click(function() {
        makeGrid();
        return false;
    });
});
