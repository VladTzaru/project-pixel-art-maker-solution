$(function() {
  'use strict';


  /*------------ PIXEL MODEL ------------*/
  const pixelModel = {};


  /*------------ PIXEL CONTROLLER ------------*/
  const pixelController = {
    init() {pixelView.init();},
    getColor() {return $('#colorPicker').val()},
    getWidth() {return $('#input_width').val()},
    getHeight() {return $('#input_height').val()},
    setColor() {
      let colorEl = $('#colorPicker');
      return colorEl.val();
    }
  };

  /*------------ PIXEL VIEW ------------*/
  const pixelView = {
    init() {

      // All DOM pointers
      let canvasEl = $('#pixel_canvas');
      let submitEl = $('#input_submit');


      // When size is submitted by the user, call makeGrid()
      function makeGrid() {

        // Get current input values
        let width = pixelController.getWidth();
        let height = pixelController.getHeight();


        // Iterate and append newly created elements
        for (let row = 0; row < height; row++) {
          let trEl = $('<tr></tr>');

          for (let col = 0; col < width; col++) {
            let tdEl = $('<td></td>');
            $(trEl).append(tdEl);

            // Eventlistener that handles background-color of each pixel
            $(tdEl).click(function() {
              tdEl.css('background-color', pixelController.setColor());
            });
          }
          $(canvasEl).append(trEl);
        }

      }

      // Event listener for our submit input
      $(submitEl).click(function() {
        makeGrid();
        return false;
      });

    }
  };


  /*------------ INVOKE METHODS ------------*/
  pixelController.init();
});
