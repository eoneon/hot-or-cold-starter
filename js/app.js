$(document).ready(function(){
	var reSet = function () {
		num = Math.floor((Math.random() * 100) + 1);
		guessCount = 0;
		alert(num);
		//$("#guessList").remove();
		//event.preventDefault();
	};

	var getGuess = function () { //function start
		
		var guess = +$("#userGuess").val();
		if(isNaN(guess) === true){
			alert("You did not enter a number!");
		} else if(isNaN(guess) === false) {
			if(guess%1  !== 0) {
				alert("You did not enter a whole number!");
			} else if(guess%1  == 0) {
				if(guess >= 1 && guess <= 100) {
					diff = Math.abs(guess - num);
					$("#guessList").append("<li>" + guess + "</li>");
					if(diff > 50) {
						alert("Ice Cold!");
					} else if(diff <= 50 && diff > 40) {
						alert("Cold!");
					} else if(diff <= 40 && diff > 30) {
						alert("Not Warm!");
					} else if(diff <= 30 && diff > 20) {
						alert("Yes Warm!");
					} else if(diff <= 20 && diff > 10) {
						alert("Hot Hot Hot!");
					} else if(diff <= 10 && diff > 0) {
						alert("So funking Hot!");
					} else if(diff == 0) {
						alert("Bingo!");
					}
				} 
				else {
					alert("Select a number between 1 and 100.");
				}
			}//else if guess%
		}
	}; //function end
	
	
	$("a.new").on("click", reSet);
	$("#guessButton").on("click", getGuess);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


