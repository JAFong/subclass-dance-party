$(document).ready(function(){
  var score = 0;
  window.dancers = [];
  var dancerCount = 0;
  var top = $("body").height()/4;
  var left = $("body").width()/2 - 236;
  var speed = 10000;
  var hackReactorTitle = makeTitleDancer(top,left,speed);
  top = $("body").height()/4 + 250;
  left = $("body").width()/2 - 70;
  speed = 300;
  var initialTextDancer = makeTextDancer(top,left,speed);
  $('body').append(hackReactorTitle.$node);
  window.dancers.push(hackReactorTitle.$node);
  while (score.toString().length < 12) {
    score = 0 + "" + score;
  }
  $('.scorebar').replaceWith('<div class="scorebar">SCORE: ' + score + '</div>');
  $('body').append(initialTextDancer.$node);
  window.dancers.push(initialTextDancer.$node);
  while (score.toString().length < 12) {
    score = 0 + "" + score;
  }
  $('.scorebar').replaceWith('<div class="scorebar">SCORE: ' + score + '</div>');
  $('.toggleTitleButton').click(function(){$('.superHackDancer').toggle();});
  var textHidden = false;

  // 1P Press Start Hider
  $('.toggleTextButton').click(function(){
    if (textHidden === false) {
    $('.textDancer').css('color', '#637AFF');
    textHidden = true;
    } else {
    $('.textDancer').css('color', 'white');
    textHidden = false;
    }});

  // var moveMiddle = function() {
  //   // var allBody = $('body')[0].children;
  //   // // $('.dancer').moveToMiddle();
  //   for (var i = 0; i < $('.dancer').length; i++) {
  //     $('.dancer')[i].moveToMiddle();
  //   }
  // }
  // $(".titleButton").on("click", function(event){
  //   $('superHackDancer').toggle();
  // };

  $(".lineupButton").on("click", function(event) {
      var $dancer = $('.dancer');
      for (var i = 0; i < $dancer.length; i++) {
          $dancer.each(function(i, obj) {
              var curPos = i * 40;
              $(obj).css({
                  left: curPos
              });
          });
      }
  });
 // On press enter

 // Logo MouseOver Handler
 $(".superHackDancer").on("mouseover", function(event){
    $(this).animate({
    'top': "-=20px"
  },"fast");
    $(this).animate({
    'top': "+=20px"
  },"fast");
  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position


    if (dancerMakerFunctionName === 'makeTitleDancer') {
      top = $("body").height()/4;
      left = $("body").width()/2 - 236;
      speed = 10000;
    } else if (dancerMakerFunctionName === 'makeTextDancer') {
      top = $("body").height()/4 + 250;
      left = $("body").width()/2 - 70;
      speed = 300;
    } else if (dancerMakerFunctionName === 'makeMarioDancer') {
      top = 66;
      left = $("body").width() * Math.random();
      speed = 300;
    } else if (dancerMakerFunctionName === 'makeLuigiDancer') {
      top = 66;
      left = $("body").width() * Math.random();
      speed = 300;
    } else if (dancerMakerFunctionName === 'makeBulletDancer') {
      top = .8 * $("body").height() * Math.random() +100;
      left = -5;
      speed = 5000;
    } else {
      top = $("body").height() * Math.random();
      left = $("body").width() * Math.random();
      speed = Math.random() * 1000;
    }

    var dancer = new dancerMakerFunction(
      top,
      left,
      speed
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
    dancerCount++;
    score = 100 * dancerCount;
    while (score.toString().length < 12) {
      score = 0 + "" + score;
    }
    $('.scorebar').replaceWith('<div class="scorebar">SCORE: ' + score + '</div>');
  });

});

