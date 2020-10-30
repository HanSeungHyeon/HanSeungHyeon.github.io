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
	
	});