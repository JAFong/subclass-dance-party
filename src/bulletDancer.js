var bulletCount = 0;

var BulletDancer = function(top, left, timeBetweenSteps) {
  ProtoDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bulletDancer");
  this.$node.append('<img src="src/Resources/bulletbill0.png" />');
  this.$node.attr('id', 'bulletCount'+bulletCount);

};

BulletDancer.prototype = Object.create(ProtoDancer.prototype);
BulletDancer.prototype.constructor = BulletDancer;
BulletDancer.prototype.step = function() {
  ProtoDancer.prototype.step.call(this);
  // console.log(this.$node.css('left'));
  // if (this.$node.css('left') <= $("body").width()) {
  var distance = $("body").width();
  // var context = this;
  this.$node.animate({
    'left': "+=" + (distance - 30)
  }, 5000);

  this.$node.animate({
    'left': "-=" + (distance - 30)
  }, 5000);

};

var makeBulletDancer = function(top, left, timeBetweenSteps) {
  var newDancer = new BulletDancer(top, left, timeBetweenSteps);
  newDancer.$node.css({
    "transform": "scale(1.1,1.1)"
  });
  bulletCount++;

  return newDancer;
};
