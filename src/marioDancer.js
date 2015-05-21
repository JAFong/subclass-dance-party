var marioCount = 0;
var marioFrames = ["src/Resources/mario0.png","src/Resources/mario1.png"];

var MarioDancer = function (top, left, timeBetweenSteps) {
  ProtoDancer.call(this, top, left, timeBetweenSteps);

  this.$node.append('<img src="src/Resources/mario0.png" />');
  this.$node.attr('id', 'marioDancer'+marioCount);
  this.$node.addClass("marioDancer");

};

MarioDancer.prototype = Object.create(ProtoDancer.prototype);
MarioDancer.prototype.constructor = MarioDancer;
MarioDancer.prototype.step = function () {
  ProtoDancer.prototype.step.call(this);
  this.$node.attr('src', marioFrames[0]);
  this.$node.delay(125);
  this.$node.attr('src', marioFrames[1]);
  this.$node.animate({
    'bottom': "+=30px"
  }).delay(125).animate({
    'bottom': "-=30px"
  });
};

MarioDancer.prototype.setPosition = function (bottom, left) {

  var styleSettings = {
    bottom: bottom,
    left: left
  };
  this.$node.css(styleSettings);
};

MarioDancer.prototype.moveToMiddle = function () {
  ProtoDancer.prototype.moveToMiddle.call(this);
};

var makeMarioDancer = function (top, left, timeBetweenSteps) {
  var newDancer = new MarioDancer(top, left, timeBetweenSteps);
  marioCount++;
  return newDancer;
};
