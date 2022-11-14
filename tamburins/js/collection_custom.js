  $(function(){//document.ready
    $(window).scroll(function(){      
      var value = $(window).scrollTop();// value변수에 스크롤 이동값을 할당
      var sTop = $("#scroll").offset().top;
      var cTop = $("#scroll .color").offset().top;
      if(value >= sTop && value < cTop){
        var sum = (value - sTop) + 400;        
        $("#scroll .text").css({"top": sum+"px"});
      }
    })

      //스크롤 위치에 따라 배경색 변경
      $(window).scroll(function(){// 스크롤이벤트 발생시
      var scroll = $(window).scrollTop();// 스크롤 이동값을 scroll변수에 할당

      //section요소의 각 top위치 값을  구해서 변수에 할당.
      var bTop = $("#scroll").offset().top;
      var aTop = $("#contents").offset().top;
      var cTop = $("#show").offset().top;
      var eTop = $("#txt").offset().top;

      if(scroll >= bTop && scroll < aTop){// 스크롤 이동 값이 banner의 top위치 값보다는 크고 about의 top위치 값보다는 작을 때
        $("body").css("background-color","#172326")
      }else if(scroll >= aTop && scroll < cTop){//스크롤 이동값이 banner의 top위치값보다는 작을때
        $("body").css("background-color", "#405351")
      }else if(scroll >= cTop && scroll < eTop){//contactTop보다 크고 etcTop보다 작을때
        $("body").css("background-color","#536664")
      }else if(scroll >= eTop){//etcTop보다 클때
        $("body").css("background-color","#70828")
      }
    })

  //background-color: #172326;/*그라1*/
  //background-color: #223032;/*그라2*/
  //background-color: #405351;/*그라3*/
  //background-color:#536664;/*그라4*/
  //background-color: #708282;/*그라5*/


  });