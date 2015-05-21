var BlinkyDancer = function (top, left, timeBetweenSteps) {
  ProtoDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass("dancer");
  this.$node.addClass("BlinkyDancer");
  this.$node.append("1P PRESS START");
};

BlinkyDancer.prototype = Object.create(ProtoDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function () {
  ProtoDancer.prototype.step.call(this);
  this.$node.toggle();

};

BlinkyDancer.prototype.setPosition = function (top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

BlinkyDancer.prototype.moveToMiddle = function () {
  ProtoDancer.prototype.moveToMiddle.call(this);
};

var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  var newDancer = new TextDancer(top, left, timeBetweenSteps);
  return newDancer;
};
