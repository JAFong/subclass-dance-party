var TextDancer = function (top, left, timeBetweenSteps) {
  ProtoDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass("dancer");
  this.$node.addClass("textDancer");
  this.$node.append("1P PRESS START");
};

TextDancer.prototype = Object.create(ProtoDancer.prototype);
TextDancer.prototype.constructor = TextDancer;
TextDancer.prototype.step = function () {
  ProtoDancer.prototype.step.call(this);
  this.$node.toggle();

};

TextDancer.prototype.setPosition = function (top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

TextDancer.prototype.moveToMiddle = function () {
  ProtoDancer.prototype.moveToMiddle.call(this);
};

var makeTextDancer = function (top, left, timeBetweenSteps) {
  var newDancer = new TextDancer(top, left, timeBetweenSteps);
  return newDancer;
};
