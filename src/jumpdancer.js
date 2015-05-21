var JumpDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("jumper");
};


JumpDancer.prototype = Object.create(Dancer.prototype);

JumpDancer.prototype.constructor = JumpDancer;

JumpDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    'marginBottom': "+=50px"
  });
  this.$node.animate({
    'marginBottom': "-=50px"
  });
};
JumpDancer.prototype.moveToMiddle = function() {
  Dancer.prototype.moveToMiddle.call(this);
};

JumpDancer.prototype.setPosition = function(bottom, left) {

  var styleSettings = {
    bottom: 100,
    left: left
  };
  this.$node.css(styleSettings);
};

var makeJumpDancer = function(bottom, left, timeBetweenSteps) {
  // if (bottom !== 0) {
  //   bottom = 0;
  // }
  var newDancer = new JumpDancer(bottom, left, timeBetweenSteps);
  return newDancer;
};
