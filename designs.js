$(function() {
    'use strict';


    // DOM pointers
    const canvasEl = $('#pixel_canvas');
    const sizePickerEl = $('#sizePicker');

    // Set color
    function setColor() {
        const colorVal = $('#colorPicker').val();
        return colorVal;
    }


    // Delete grid
    function deleteGrid() {
        $(canvasEl).empty();
    }


    // Create grid
    function makeGrid() {

        // Before adding new rows to the table, delete the existing ones first
        deleteGrid();

        const width = $('#input_width').val();
        const height = $('#input_height').val();

        for (let r = 0; r < width; r++) {
            const row = $('<tr></tr>');

            for (let c = 0; c < height; c++) {
                const cell = $('<td></td>');
                $(row).append(cell);

                // Event listener that sets background-color for each pixel
                $(cell).click(function() {
                    cell.css('background-color', setColor());
                });
            }

            $(canvasEl).append(row);
        }
    }


    // Event listener that invokes makeGrid() function
    sizePickerEl.on('submit', function(e) {
        e.preventDefault();
        makeGrid();
    });
});
