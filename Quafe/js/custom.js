$(function(){
  //toggle버튼에 클릭이벤트 생성
  $(".toggle").click(function(){
    //.gnb요소에 slideToggle메서드 적용
    $("#gnb").stop().slideToggle("fast");
  })
})