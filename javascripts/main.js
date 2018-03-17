$(document).ready(function(){
  var docWidth, docHeight, mainBtn_width, mainBtn_height;
  var currentPosition;
  var hoverInterval;

  var circle, circleSize, circlePosition;
  //document height and width
  docWidth = $("body").width();
  docHeight = $("body").height();

  //gets the height and width of the main starting button
  mainBtn_width = $(".main-btn").width();
  mainBtn_height = $(".main-btn").height();

  //gets the center of the document
  var centerPoint = {
    "top" : docHeight/2,
    "left" : docWidth/2
  };

//FUNCTIONS FOR EVENT LISTENRES {

  //on click explosion animation that opens all the buttons
  var explosion = function(){
    stopHoverAnimation();
    clearInterval(hoverInterval);
    $(".main-btn").stop(true, false);
    //generates all the circles and sets the positions
    for (i = 0; i < 7; i++){

      circle = "<div id='c"+ i + "' class='circles'></div>";
      $("#main-container").append(circle);

      circleSize = Math.floor( Math.random() * 100) + 50 + "px";
      console.log(circleSize);

      currentPosition = $("#c"+i).position();
      circlePosition = {
        "top": centerPoint.top - Math.floor( Math.random() * 100) - 100 + "px",
        "left": centerPoint.left - Math.floor( Math.random() * 100) + 200 + "px"
      }

      $("#c"+i).animate({
        'width': circleSize,
        'height': circleSize,
        'left': circlePosition.left,
        'top': circlePosition.top

      }); //end of #c animate
    } //end of for loop

    $(this).unbind("click",explosion);
    $(this).unbind("mouseenter",stopHoverAnimation);
    $(this).unbind("mouseleave",resetHoverAnmiation);
  } // end of explosion funciton

  function mainBtnHover() {
    currentPosition = $(".main-btn").position();
    $(".main-btn").animate({
      top: centerPoint.top - mainBtn_height/2 - 20 + "px"
    },2000,function(){
      $(this).animate({
        top: centerPoint.top - mainBtn_height/2 + 20 + "px"
      },2000);
    });
  }

  function initBtnHover(){
    mainBtnHover();
    hoverInterval = setInterval(function(){mainBtnHover();}, 4000);
  }

  function stopHoverAnimation(){
    $(".main-btn").stop(true,false).animate({
      top: centerPoint.top - mainBtn_height/2
    },1000);
    clearInterval(hoverInterval);
  }

  function resetHoverAnmiation(){
    initBtnHover();
  }

  //END OF FUNCTIONS FOR EVENT LISTENRES }

  //INITIATING ANIMATIONS {
  initBtnHover();

  //EVENT LISTENERES
  $(".main-btn").bind("mouseenter", stopHoverAnimation);
  $(".main-btn").bind("mouseleave", resetHoverAnmiation);

  //opens all the buttons on click on the main button
  $(".main-btn").bind("click", explosion);


  //END OF EVENT LISTENERES }

});
