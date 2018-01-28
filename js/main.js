let on = true;

$(document).ready(function(){

  $(document).keydown(function(event){
    if(event.keyCode === 32 ){
      if(on){
        $("body").css("filter", "brightness(0.4)");
        $("body").css("background-color", "black");
        $(".switch").animate({ top: "5%"}, 250);
        $(".switch2").animate({ top: "5%"}, 250);

        on = false;
      }else{
        $("body").css("filter", "brightness(1)");
        $("body").css("background-color", "grey");
        $(".switch").animate({ top: "70%"}, 250);
        $(".switch2").animate({ top: "15%"}, 250);
        on = true
      };
    };
  });
});
