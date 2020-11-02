//PC용 메뉴 보이기/숨기기 함수 선언(아래)
var isOver1 = false; //플래그(깃발) 변수 false일때만 fadeOut이 작동됨
var isOver2 = false; //플래그(깃발) 변수 false 일때만 fadeOut이 작동됨
function goHide1(){
	if(!isOver1&& !isOver2) {
		// 자바스크립트는 뒤에서부터 앞으로 해석합니다.
		$('.gnb_depth2_1').stop().fadeOut('fast');
		//fadeIn(서서히 나타남) fadeOut(서서히 사라짐)
	}
}
// 2번째 서브메뉴
var isOver11 =false;
var isOver22 =false;
function goHide2(){
	if(!isOver11 && !isOver22){
		$('.gnb_depth2_2').stop().fadeOut('fast');
	}
}
// 3번째 서브메뉴
var isOver111 =false;
var isOver222 =false;
function goHide3(){
	if(!isOver111 && !isOver222){
		$('.gnb_depth2_3').stop().fadeOut('fast');
	}
}
// 4번째 서브메뉴
var isOver1111 =false;
var isOver2222 =false;
function goHide4(){
	if(!isOver1111 && !isOver2222){
		$('.gnb_depth2_4').stop().fadeOut('fast');
	}
}
/* // 함수의 기본작동원리
function aname(vars){//함수선언}
alert(vars+"이름출력");
}
aname('김일국');//함수호출 */
$(document).ready(function(){
	$(".to_top a").smoothScroll()
    $(".openMOgnb").click(function(){
	// $(".header_cont").css("display","block");
	$(".header_cont").slideDown("slow");
	//header 아이디 영역 백그라운드 추가
	$("#header").addClass("on");
	});
	$(".closePop").click(function(){
		// $(".header_cont").css("display","none");
		$(".header_cont").slideUp("fast");
		$("#header").removeClass("on");
	});
	// PC용 메뉴 롤오버(마우스) 호출부분(아래)
	// 대메뉴1 - gnb_depth2_1 첫번째 서브메뉴 마우스 액션
	$('.openAll1').mouseover(function(){
		// pc용에서만 액션이 가능하도록 가로크기 비교(아래)
        if(parseInt($('header').css('width'))> 1055){
			$('.gnb_depth2_1').fadeIn('fast');
		}
		isOver1 = true;
	});
	// 대메뉴1 - gnb_depth2_1첫번재 서브메뉴 마우스 선택액션
	$('.openAll1').focus(function(){
		if(parseInt($('header').css('width'))>1055){
			$('.gnb_depth2_1').fadeIn('fast');
		}
		isOver1 = true;
	});
	// 대메뉴1 - gnb_depth2_1 첫번째 서브메뉴 마우스 아웃액션
	$('.openAll1').mouseout(function(){
		isOver1 = false;
		setTimeout("goHide1()",200); // 0.2초 후에 goHide1 함수 실행
	});
	// 첫번재  서브메뉴 마우스 오버했을때 액션
	$('.gnb_depth2_1').mouseover(function(){
		isOver2 = true; //fadeOut 작동을 하지 않겠다는 명시적인 변수값
	});
	// 첫번째 서브메뉴 선택액션 focus < = > blur
	$('.gnb_depth2_1').focus(function(){
		isOver2 = true;
	});
	// 첫번째 서브메뉴 마우스 아웃액션
	$('.gnb_depth2_1').mouseout(function(){
		isOver2 = false; //fadeOut을 작동 하겠다는 명시적인 변수값
		setTimeout("goHide1()",200);
	});
	// 첫번째 서브메뉴 선택을 벗어났을 때 액션
	$('.gnb_depth2_1').blur(function(){
		isOver2 = false;
		setTimeout("goHide1()",200);
	});
	// 첫번째 서브메뉴 중 마지막 li태그 '해외 '를 벗어났을 때 액션
	$('.gnb_depth2_1 li:last-child a').blur(function(){
		isOver1 = false;
		setTimeout("goHide1()", 200);
	});
	// gnb_depth 2_2
	$('.openAll2').mouseover(function(){
        if(parseInt($('header').css('width'))> 1055){
			$('.gnb_depth2_2').fadeIn('fast');
		}
		isOver11 = true;
	});
	$('.openAll2').focus(function(){
		if(parseInt($('header').css('width'))>1055){
			$('.gnb_depth2_2').fadeIn('fast');
		}
		isOver11 = true;
	});
	$('.openAll2').mouseout(function(){
		isOver11 = false;
		setTimeout("goHide2()",200); // 0.2초 후에 goHide1 함수 실행
	});
	$('.gnb_depth2_2').mouseover(function(){
		isOver22 = true; //fadeOut 작동을 하지 않겠다는 명시적인 변수값
	});
	$('.gnb_depth2_2').focus(function(){
		isOver22 = true;
	});
	$('.gnb_depth2_2').mouseout(function(){
		isOver22 = false; //fadeOut을 작동 하겠다는 명시적인 변수값
		setTimeout("goHide2()",200);
	});
	$('.gnb_depth2_2').blur(function(){
		isOver22 = false;
		setTimeout("goHide2()",200);
	});
	$('.gnb_depth2_2 li:last-child a').blur(function(){
		isOver11 = false;
		setTimeout("goHide2()", 200);
	});
	// gnb_depth 2_3
	$('.openAll3').mouseover(function(){
		// pc용에서만 액션이 가능하도록 가로크기 비교(아래)
        if(parseInt($('header').css('width'))> 1055){
			$('.gnb_depth2_3').fadeIn('fast');
		}
		isOver111 = true;
	});
	// 대메뉴1 - gnb_depth2_1첫번재 서브메뉴 마우스 선택액션
	$('.openAll3').focus(function(){
		if(parseInt($('header').css('width'))>1055){
			$('.gnb_depth2_3').fadeIn('fast');
		}
		isOver111 = true;
	});
	// 대메뉴1 - gnb_depth2_1 첫번째 서브메뉴 마우스 아웃액션
	$('.openAll3').mouseout(function(){
		isOver111 = false;
		setTimeout("goHide1()",200); // 0.2초 후에 goHide1 함수 실행
	});
	// 첫번재  서브메뉴 마우스 오버했을때 액션
	$('.gnb_depth2_3').mouseover(function(){
		isOver222 = true; //fadeOut 작동을 하지 않겠다는 명시적인 변수값
	});
	// 첫번째 서브메뉴 선택액션 focus < = > blur
	$('.gnb_depth2_3').focus(function(){
		isOver222 = true;
	});
	// 첫번째 서브메뉴 마우스 아웃액션
	$('.gnb_depth2_3').mouseout(function(){
		isOver222 = false; //fadeOut을 작동 하겠다는 명시적인 변수값
		setTimeout("goHide3()",200);
	});
	// 첫번째 서브메뉴 선택을 벗어났을 때 액션
	$('.gnb_depth2_3').blur(function(){
		isOver222 = false;
		setTimeout("goHide3()",200);
	});
	// 첫번째 서브메뉴 중 마지막 li태그 '해외 '를 벗어났을 때 액션
	$('.gnb_depth2_3 li:last-child a').blur(function(){
		isOver111 = false;
		setTimeout("goHide3()", 200);
	});
	// gnb_depth2_4
	$('.openAll4').mouseover(function(){
        if(parseInt($('header').css('width'))> 1055){
			$('.gnb_depth2_4').fadeIn('fast');
		}
		isOver1111 = true;
	});
	$('.openAll4').focus(function(){
		if(parseInt($('header').css('width'))>1055){
			$('.gnb_depth2_4').fadeIn('fast');
		}
		isOver1111 = true;
	});
	$('.openAll4').mouseout(function(){
		isOver1111 = false;
		setTimeout("goHide4()",200); // 0.2초 후에 goHide1 함수 실행
	});
	$('.gnb_depth2_4').mouseover(function(){
		isOver2222 = true; //fadeOut 작동을 하지 않겠다는 명시적인 변수값
	});
	$('.gnb_depth2_4').focus(function(){
		isOver2222 = true;
	});
	$('.gnb_depth2_4').mouseout(function(){
		isOver2222 = false; //fadeOut을 작동 하겠다는 명시적인 변수값
		setTimeout("goHide4()",200);
	});
	$('.gnb_depth2_4').blur(function(){
		isOver2222 = false;
		setTimeout("goHide4()",200);
	});
	$('.gnb_depth2_4 li:last-child a').blur(function(){
		isOver1111 = false;
		setTimeout("goHide4()", 200);
	});

	});