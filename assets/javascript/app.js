var ques = "";
var ans = [];
var ii = 0;
var wrong = 0;
var right = 0;
var qa =[{
		ques: "In 'A Glitch is a Glitch', who releases the computer virus, even though they didn't create it?",
		ans: ["Beemo","Finn and Jake","Ice King","Marceline"],
		correctanswer: 1,
	},{
		ques: "How did Jake obtain his powers?",
		ans: ["Mud Puddle","Sandwiches","A Wizzard","Inherited By His Parents"],
		correctanswer: 0,
	},{
		ques: "Who was the original Goblin King?",
		ans: ["Ice King","Xergiok","Marceline's Dad","Lemongrab"],
		correctanswer: 1,
	},{
		ques: "What was Finn's original name?",
		ans: ["Earl","Buddy","Pen","Bob"],
		correctanswer: 2,
	},{
		ques: "What is the animal that can be seen somewhere in every episode?",
		ans: ["Lion","Pig","Bat","Snail"],
		correctanswer: 3,
	},{
		ques: "Marceline is not a traditional vampire. What does she primarily eat?",
		ans: ["Fruit, like a fruit bat","Pizza, with extra red sauce","Books about violence","The color shade red"],
		correctanswer: 3,
	},{
		ques: "Which of the following is NOT a princess?",
		ans: ["Princess Bubblegum", "Flame Princess", "Ice Princess", "Marceline Abadeer"],
		correctanswer: 2,
	}
	];



/*var questionTimer = {
		time: 30,

		reset: function () {
        	questionTimer.time = 30;
    	},
   		start: function(){
   			$('#time').html("Time Remaining: " + questionTimer.time);
        	counter = setInterval(questionTimer.count, 1000);
    	},
    	stop: function(){
        	clearInterval(counter);
    	},
    	count: function(){
   	        questionTimer.time--;
	        $('#time').html("Time Remaining: " + questionTimer.time);

	        if(questionTimer.time == 0) {
	        	questionTimer.stop();
	        }
    	},
	}

*/








    
$(document).ready(function(){

	/* Theme music files */
	var themeMusic = new Audio("assets/adventuretimemusic/AdventureTimeTheme.mp3");
	themeMusic.play(); /* start music on page load. */

    

function answerChoices(){
	$('#possAnswers').empty();
	for (var i = 0; i < qa[ii].ans.length; i++){
			$('#possAnswers').append("<button class='answer' value='"+[i]+"'>" + qa[ii].ans[i] + "</button><br>");
  			
	}
}


//setTimeout(halfTime, 1000 * 16);


var timez = {
    time: 31,
    
    start: function(){
        //Use setInterval to start the count here
        timez.time = 31;
        $('#startGame').empty();

        counter = setInterval(timez.count, 1000);
        //timeoutHandle = setTimeout(timeUp, 1000 * 31);
        if (qa[ii] === qa[6]) {
  				timez.reset();
  			}else{
        $('#question').html("<h3>" + qa[ii].ques + "</h3>");
        answerChoices();
        attachEvents();}
		//if (timez.time === 0)
    },
    stop: function(){
        	clearInterval(counter);
        	//clearTimeout(timeoutHandle);
    	},
    
    count: function(){
        //increment time by 1, remember we cant use "this" here
      timez.time--;
        var timeCD = timez.time;
        $("#displayCD").html(timeCD);
        if (timez.time === 0){
        	ii++
        	timez.stop(); 
        	timez.start();
        	alert("Times up!");
        }


    },
    
    reset: function(){
		timez.stop();
		ii = 0;
        //timez.time = 31;
        $("#displayCD").html("");
        alert("Game Over!");
        $('#startGame').html("<button class='center-block'>Press to start the game</button>");
			$('#question').empty();
        	$('#possAnswers').empty();

  			//attachEvents();
	},
	
};

    
	function eX(){
		$('#photo').html("");

	}

	/*function halfTime(){
		$('#time-left').html("<h3>About 15 seconds left</h3>");
		setTimeout(timeLeftX, 3000);
	}*/
	
	/*function reset(){
		timez.stop();
        timez.time = 31;
        $("#displayCD").html("");
        alert("Times up!");
        $('#startGame').css("display", "initial");
			$('#question').empty();
        	$('#possAnswers').empty();
	};*/

	

$('#startGame').click(timez.start);




function attachEvents(){
$('.answer').on("click", function answerClick(){
	console.log(this);
    var el = $(this);
    var yy = el.text();
    console.log(yy);
    var buttonClick = parseInt(el.attr('value'));
		if (buttonClick === qa[ii].correctanswer){
			right++;
			$("#displayCD").html("Good Job! Next Question!");
			$("#photo").html("<img src='http://media2.giphy.com/media/c5PHIq9sXsV6o/giphy.gif' />");
			setTimeout(eX, 1000);
			ii++;
        	timez.stop();
	        timez.start();
  			if (qa[ii] === qa[6]) {
  				timez.reset();
  			}else{}
  		}else{
  			wrong++;
  			ii++;
  			$("#displayCD").html("Wrong! Next Question!");
  			$("#photo").html("<img src='http://25.media.tumblr.com/29bfc79b2e4a501a2f7ee3bfbd1dcf0e/tumblr_mf4y1jGtCd1rkiy6bo1_500.gif' />");
  			setTimeout(eX, 1000)
        	timez.stop();
	        timez.start();
  			if (qa[ii] === qa[6]) {
  				timez.reset();
  			}else{}
  		 }
	})};




});



























