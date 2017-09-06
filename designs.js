/*------------ PIXEL MODEL ------------*/
const pixelModel = {
  // Select color input
  selectedColor: $('#colorPicker').val(),
  // Select size input
  selectedWidth: $('#input_width').val(),
  selectedHeight: $('#input_height').val()
};


/*------------ PIXEL CONTROLLER ------------*/
const pixelController = {
  getColor() {return pixelModel.selectedColor},
  getWidth() {return pixelModel.selectedWidth},
  getHeight() {return pixelModel.selectedHeight}
};


/*------------ PIXEL VIEW ------------*/
const pixelView = {
  init() {

  },

  render () {

  }
};

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
