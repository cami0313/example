$(function(){//document.ready
  setInterval(function(){
    var first = $(".imgGroup > li:first");
    $(".imgGroup").animate({"left":"-1140px"},1200,function(){
      $(this).append(first).css("left","0px");
    })
  },3000);


  $(window).scroll(function(){// 브라우저에 스크롤이벤트 발생 시
    var scroll = $(window).scrollTop();// 스크롤 이동값
    var bannerTop = $("#banner").offset().top;// #about의 top위치값
  });
});

