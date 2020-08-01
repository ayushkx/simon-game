var buttonColours=["red", "blue", "green", "yellow" ];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var start=false;


$(document).keypress(function(){
   if(!start){
   	$("#level-title").text("Level " +level);
   nextSequence();
   start=true;
   }

});

$(".btn").click(function(){
	var userChosenColour=$(this).attr("id");
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
	

   checkanswer(userClickedPattern.length-1);
});


function checkanswer(currentlevel){
	if(userClickedPattern[currentlevel]===gamePattern[currentlevel]){
		console.log("success");
	
	if(userClickedPattern.length===gamePattern.length){
		 setTimeout(function(){
		 	nextSequence();
		 },1000);

	}
   }
   else{
   	console.log("wrong");
   	var aud=new Audio("sounds/wrong.mp3");
   	aud.play();
   	$("#level-title").text("Game Over, Press Any Key to Restart");
   	$("body").addClass("game-over");
   	setTimeout(function(){
   		$("body").removeClass("game-over");
   	},200);
   	startover();
   }
}
 

function startover(){
	gamePattern=[];
	level=0;
    start=false;

} 


function nextSequence(){
	userClickedPattern=[];
	level++;
$("#level-title").text("Level "+level);
var randomnumber=Math.floor(Math.random()*4);
var randomChosenColour=buttonColours[randomnumber];
gamePattern.push(randomChosenColour);
playSound(randomChosenColour);
$("#"+randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);


 }

function animatePress(currentcolor){

$("#"+currentcolor).addClass('pressed');
setTimeout(function(){
	$("#"+currentcolor).removeClass('pressed');
},100);
}

function playSound(name){
	var audio=new Audio("sounds/"+name+".mp3");
	audio.play();

}



	
