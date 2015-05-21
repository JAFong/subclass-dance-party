var Base = function(top, left, speed) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.steps();
  this.setPosition(top, left);
}

Base.prototype.step = function() {
  var that = this;
  setTimeout(this.step.bind(that), this.timeBetweenSteps);

};

Base.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
