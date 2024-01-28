$(function(){//document.ready

  /*메뉴 서브페이지 토글버튼*/ 
  $(".title").click(function(){
    if($(this).next().css("display") == "none"){
      $(".sub").slideUp();
    }
      $(this).next().slideToggle();
  });

  /*new model 이미지 애니메이션*/
  setInterval(function(){
    var first = $(".imgGroup > li:first");
    $(".imgGroup").animate({"left":"-866px"},1200,function(){
      $(this).append(first).css("left","0px");
    })
  },3000);

});

