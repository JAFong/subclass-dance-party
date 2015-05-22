var luigiCount = 0;
var LuigiFrames = ["src/Resources/Luigi0.png"];

var LuigiDancer = function (top, left, timeBetweenSteps) {
  ProtoDancer.call(this, top, left, timeBetweenSteps);

  this.$node.append('<img src="src/Resources/luigi0.png" />');
  this.$node.attr('id', 'LuigiDancer'+luigiCount);
  this.$node.addClass("luigiDancer");

};

LuigiDancer.prototype = Object.create(MarioDancer.prototype);
LuigiDancer.prototype.constructor = LuigiDancer;
LuigiDancer.prototype.step = function () {
  MarioDancer.prototype.step.call(this);
  this.$node.attr('src', LuigiFrames[0]);
  this.$node.animate({
    'left': "+=50px"
  }).animate({
    'left': "-=100px"
  }).animate({
    'left': "+=50px"
  });;
};

LuigiDancer.prototype.setPosition = function (bottom, left) {
  ProtoDancer.prototype.setPosition.call(this);
  var styleSettings = {
    bottom: bottom,
    left: left
  };
  this.$node.css(styleSettings);
};

LuigiDancer.prototype.moveToMiddle = function () {
  ProtoDancer.prototype.moveToMiddle.call(this);
};

var makeLuigiDancer = function (top, left, timeBetweenSteps) {
  var newDancer = new LuigiDancer(top, left, timeBetweenSteps);
  luigiCount++;
  return newDancer;
};
