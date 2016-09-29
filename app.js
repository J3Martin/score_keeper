$(document).ready(function(){
	
	var score = 0;
	$("#increase-5").on("click", function(){
		score += 5;
		$("#score").html(score + " Cookies");
	});
	$("#decrease-5").on("click", function(){
		if (score - 5 >= 0){
			score -=5;
			$("#score").html(score + "  Cookies")
			$("#score").removeClass("background")
		} else {
			score= 0;
			$("#score").html(score + "  Cookies")
		}
		$("score").html(score);
	});
	$("#submit-custom-score").on("click",function(){
		var joe = parseInt($("#custom-score").val());
		$("#score").html(joe + " Cookies");
		score=joe;
		if(score <= 50){
			$("#score").addClass("background")
		}
	});
});