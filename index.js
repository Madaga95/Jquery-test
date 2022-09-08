//$("h1").addClass("big-title");

$("#change").click(function(){
  $("h1").css("color", "purple");
});

$("#back").click(function(){
  $("h1").css("color", "black");
});

$("#cache").on("click", function(){
  $("h1").fadeToggle();
});
