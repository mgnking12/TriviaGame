var ques = "";
var ans = [];
var ii = 0;
var qa =[{
		ques: "In 'A Glitch is a Glitch', who releases the computer virus, even though they didn't create it?",
		ans: ["Beemo","Finn and Jake","Ice King","Marceline"],
		correctanswer: ans[1],
	},{
		ques: "How did Jake obtain his powers?",
		ans: ["Mud Puddle","Sandwiches","A Wizzard","Inherited By His Parents"],
		correctanswer: ans[0],
	},{
		ques: "Who was the original Goblin King?",
		ans: ["Ice King","Xergiok","Marceline's Dad","Lemongrab"],
		correctanswer: ans[1],
	},{
		ques: "What was Finn's original name?",
		ans: ["Earl","Buddy","Pen","Bob"],
		correctanswer: ans[2],
	},{
		ques: "What is the animal that can be seen somewhere in every episode?",
		ans: ["Lion","Pig","Bat","Snail"],
		correctanswer: ans[3],
	},{
		ques: "Marceline is not a traditional vampire. What does she primarily eat?",
		ans: ["Fruit, like a fruit bat","Pizza, with extra red sauce","Books about violence","The color shade red"],
		correctanswer: ans[3],
	},{
		ques: "Which of the following is NOT a princess?",
		ans: ["Princess Bubblegum", "Flame Princess", "Ice Princess", "Marceline Abadeer"],
		correctanswer: ans[2],
	}
	];



    
$(document).ready(function(){

	/* Theme music files */
	var themeMusic = new Audio("assets/adventuretimemusic/AdventureTimeTheme.mp3");
	themeMusic.play(); /* start music on page load. */

    

function answerChoices(){
	$('#possAnswers').empty();
	for (var i = 0; i < qa[ii].ans.length; i++){
			$('#possAnswers').append("<button class='answer'>" + qa[ii].ans[i] + "</button><br>");
  			attachEvents();
	}
}



var timez = {
    time: 31,
    
    start: function(){
        //Use setInterval to start the count here

        $('#startGame').css('display', 'none');
        counter = setInterval(timez.count, 1000);
        setTimeout(halfTime, 1000 * 16);
        setTimeout(timeUp, 1000 * 31);
        $('#question').html("<h3>" + qa[ii].ques + "</h3>");
        answerChoices();
		
    },
    
    
    count: function(){
        //increment time by 1, remember we cant use "this" here
      timez.time--;
        var timeCD = timez.time;
        $("#displayCD").html(timeCD);
    },
    
};
	function timeLeftX(){
		$('#time-left').html("");
	}

	function halfTime(){
		$('#time-left').html("<h3>About 15 seconds left</h3>");
		setTimeout(timeLeftX, 3000);
	}
	

	//reset
	function timeUp(){
        clearInterval(counter);
        timez.time = 31;
        timez.start;
        $("#displayCD").html("");
        alert("Times up!");
        ii++;
			$('#question').html("<h3>" + qa[ii].ques + "</h3>");
        	answerChoices();
  			attachEvents();
	};

	attachEvents();

$('#startGame').click(timez.start);
function attachEvents(){
$('.answer').on("click", function answerClick(){
	console.log(this);
    var el = $(this);
    var yy = el.text();
    console.log(yy);
    console.log(qa[ii].correctanswer)
		if (qa[ii].correctanswer === yy){
			alert("Good Job! Next Question!")
			$('#question').empty();
			ii++;
			$('#question').html("<h3>" + qa[ii].ques + "</h3>");
        	answerChoices();
        	clearInterval(counter);
	        timez.time = 31;
	        timez.start;
	        $("#displayCD").html("");
  			//attachEvents();
  		}else{
  			alert("Wrong! Next Question!");
  			$('#question').empty();
  			ii++;
			$('#question').html("<h3>" + qa[ii].ques + "</h3>");
        	answerChoices();
        	clearInterval(counter);
	        timez.time = 31;
	        timez.start;
	        $("#displayCD").html("");
  			//attachEvents();
  		 }
	});




}});







//fruits.indexOf("Apple")
























