var MovyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("movy");
};

MovyDancer.prototype = Object.create(Dancer.prototype);
MovyDancer.prototype.constructor = MovyDancer;
MovyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    'marginLeft': "-=30px"
  });
  this.$node.animate({
    'marginLeft': "+=30px"
  });
};

var makeMovyDancer = function(top, left, timeBetweenSteps) {
  var newDancer = new MovyDancer(top, left, timeBetweenSteps);
  return newDancer;
};
