var TitleDancer = function (top, left, timeBetweenSteps) {
  ProtoDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass("dancer");
  this.$node.addClass("superHackDancer");
  this.$node.attr('id', 'titleDancer0');
  this.$node.prepend('<img id="shr" src="src/Resources/superHackReactor.png" />');
};

TitleDancer.prototype = Object.create(ProtoDancer.prototype);
TitleDancer.prototype.constructor = TitleDancer;
TitleDancer.prototype.step = function () {
  ProtoDancer.prototype.step.call(this);

};

TitleDancer.prototype.setPosition = function (top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

TitleDancer.prototype.moveToMiddle = function () {
  ProtoDancer.prototype.moveToMiddle.call(this);
};

var makeTitleDancer = function (top, left, timeBetweenSteps) {
  var newDancer = new TitleDancer(top, left, timeBetweenSteps);
  return newDancer;
};
