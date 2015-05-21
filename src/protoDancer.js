var ProtoDancer = function (top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

};

ProtoDancer.prototype.step = function () {
  var that = this;
  setTimeout(this.step.bind(that), this.timeBetweenSteps);

};

ProtoDancer.prototype.setPosition = function (top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

ProtoDancer.prototype.moveToMiddle = function () {

  var top50 = {
    top: '50%'
  };
  this.$node.css(top50);

};

var makeProtoDancer = function (top, left, timeBetweenSteps) {
  var newDancer = new ProtoDancer(top, left, timeBetweenSteps);
  return newDancer;
};

