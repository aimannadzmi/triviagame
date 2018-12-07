$("document").ready(function() {
  var score = 0;
  var updateTime;
  var timer = { 
  	time: 30,

timer: function(){
	var time = 30;
	var reduceTime = timer.time - 1
	
		if (reduceTime < 30) {
			updateTime = setInterval(timer.time, 1000);
			timer.time--
			$(".timer").html(updateTime);
		}

		if(time < 1) {
		window.clearInterval(updateTime);
		}
	}
}
});







