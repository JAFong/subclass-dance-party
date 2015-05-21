var GrowyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("growy");
};

GrowyDancer.prototype = Object.create(Dancer.prototype);
GrowyDancer.prototype.constructor = GrowyDancer;
GrowyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    'border-height': "+=30px",
    'border-width': "+=30px"
  });
  this.$node.animate({
    'border-height': "-=30px",
    'border-width': "-=30px"
  });
};

var makeGrowyDancer = function(top, left, timeBetweenSteps) {
  var newDancer = new GrowyDancer(top, left, timeBetweenSteps);
  return newDancer;
};
