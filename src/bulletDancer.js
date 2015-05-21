var bulletCount = 0;

var BulletDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bulletDancer");
  this.$node.append('<img src="src/Resources/bulletbill0.png" />');
  this.$node.attr('id', 'bulletCount'+marioCount);
  this.$node.addClass("marioDancer");
};

BulletDancer.prototype = Object.create(Dancer.prototype);
BulletDancer.prototype.constructor = BulletDancer;
BulletDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    'marginLeft': "-=30px"
  });
  this.$node.animate({
    'marginLeft': "+=30px"
  });
};

var makeBulletDancer = function(top, left, timeBetweenSteps) {
  var newDancer = new BulletDancer(top, left, timeBetweenSteps);
  bulletcount++;
  return newDancer;
};
