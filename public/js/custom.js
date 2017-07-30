$(function(){
  var windHeight = $(window).height();
  console.log(windHeight);
  $("#bck").css("min-height", windHeight + "px");
});
