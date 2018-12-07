$("document").ready(function() {
    console.log( "ready!" );

function timer (){
	var time = 30;
	var reduceTime = time - 1;
	
	if (reduceTime < 30) {
		reduceTime--
		$(".timer").html();
	}

	if(reduceTime < 1) {
		window.clearInterval(update);
	}
};
var update = setInterval(timer(), 1000);
 console.log(update);

 });

// var timeInterval = ;
// var timerRunining = false;

// var timer = { 
// 	time: 30;


// 	function startTimer(){
	
// 		if(!timerRunining){
// 			timeInterval = setInterval(timer.time, 1000);
// 			timerRunining = true;
// 		},
// 	function timeConverter {
// 		// if(timer.time < 30){
// 		// 	$(".timer").html(converted)
// 		// }
// 	var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
//   }
// 	},
	
// 	function count() {
// 		timer.time--;
// 		var converted = timer.timeConverter(timer.time);
// 		$(".timer").html(converted)
// 	}
// };	





