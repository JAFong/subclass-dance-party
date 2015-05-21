// var Dancer = function(top, left, timeBetweenSteps) {

//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.$node = $('<span class="dancer"></span>');

//   this.step();
//   this.setPosition(top,left);

// };

// Dancer.prototype.step = function() {
//   var that = this;
//   setTimeout(this.step.bind(that), this.timeBetweenSteps);

// };

// Dancer.prototype.setPosition = function(top, left) {

//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };
var Turtle = function(top, left, speed) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition(top, left);
}
