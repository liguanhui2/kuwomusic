$(document).ready(function() {
	$(".placeholder").click(function() {
		$(this).css("display", "none");
		$(this).siblings("input").focus("");
	})
//	$(".placeholder").mouseout(function() {
//		$(this).css("display", "block");
//	})
})
