var ProtoDancer = function (top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  // this.collision();
  this.step();
  this.setPosition(top, left);

};

ProtoDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

ProtoDancer.prototype.setPosition = function (top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// ProtoDancer.prototype.moveToMiddle = function () {

//   var top50 = {
//     top: '50%'
//   };
//   this.$node.css(top50);

// };

// var checkCol = function(currNode, nextNode) {
//   var currX = currNode.offset().left;
//   var nextX = nextNode.offset().left;
//   var currY = currNode.offset().bottom;
//   var nextY = nextNode.offset().bottom;
//   var currHeight = $(currNode).attr('height');
//   var currWidth = $(currNode).attr('width');
//   var currSize = currHeight * currWidth;
//   var nextHeight = $(nextNode).attr('height');
//   var nextWidth = $(nextNode).attr('width');
//   var nextSize = nextHeight * nextWidth;
//   var difX = currX - nextX;
//   var difY = currY - nextY;
//   var dist = ((currX * currY) / 2) + ((nextX * nextY) / 2)

//   if (currX < nextX + nextWidth &&
//       currX + currWidth > nextX &&
//       currY < nextY + nextHeight &&
//       currHeight + currY > nextY
//       ) {
//     return true;
//   }
//   return false;
// };


// ProtoDancer.prototype.collision = function() {
//   var that = this;
//   var $dancers = $('.dancer');
//   for (var i = 0; i < $dancers.length; i++) {
//     if (this.$node.attr('id')) {
//     if (this.$node.attr('id') !== $($dancers[i]).attr('id')) {
//       console.log(this.$node[0]);
//       console.log($($dancers[i])[0]);
//       // if(checkCol(this.$node[0],$($dancers[i]))) {
//       //   console.log('col detect')
//       // }
//     } else {
//       console.log('same dancer');
//     }
//   }
//   }
//   setTimeout(this.collision.bind(that), 5000);
// }

var makeProtoDancer = function (top, left, timeBetweenSteps) {
  var newDancer = new ProtoDancer(top, left, timeBetweenSteps);
  return newDancer;
};

