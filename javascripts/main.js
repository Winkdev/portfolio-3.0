$(document).ready(function(){
  var docWidth, docHeight, mainBtn_width, mainBtn_height;
  var currentPosition;
  var hoverInterval;
  var height = 100;
  docWidth = $("body").width();
  docHeight = $("body").height();

  mainBtn_width = $(".main-btn").width();
  mainBtn_height = $(".main-btn").height();

  var centerPoint = {
    "top" : docHeight/2,
    "left" : docWidth/2
  };

  currentPosition = $(".main-btn").position();
  function mainBtnHover() {

    $(".main-btn").animate(
      {top: currentPosition.top + 10 + "px"},1500
    ). animate(
      {top: currentPosition.top - 20 + "px"},1500
    );
  }


  mainBtnHover();
  hoverInterval = setInterval(function(){mainBtnHover();}, 3000);

  //on click explosion animation that opens all the buttons
  var explosion = function(){
    for (i = 0; i < 7; i++){
      var circle = "<div id='c"+ i + "' class='circles'></div>";


      $("#main-container").append(circle);
      $("#c"+i).css({
        "top": "100px"
      });
    }
  }

  $(".main-btn").bind("click", explosion);

  $(".main-btn").mouseenter(function(){
    clearInterval(hoverInterval);
    $(this).stop(true,false).animate({
      top: centerPoint.top - mainBtn_height/2,
      left: centerPoint.left - mainBtn_width/2
    },1000);
  });



  $(".main-btn").mouseleave(function(){

    mainBtnHover();
    hoverInterval = setInterval(function(){mainBtnHover();}, 3000);
  });

});
