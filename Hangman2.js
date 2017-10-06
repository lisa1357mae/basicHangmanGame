


//set animal array
var words = ["cat", "monkey", "panda", "horse", "fox", "zebra", "lion"];
//pick random word
var word = words[Math.floor(Math.random() * words.length)];
//set answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}


var remainingLetters = word.length;

var remainingGuesses = 6;
var correctGuess;

//game loop
while (remainingLetters > 0 && remainingGuesses > 0 ) {

//Show the player their progress
alert(answerArray.join(" "));
//Take guesses from the player
var guess = prompt ("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
  break;
} else if (guess.length !== 1 ){
  alert("Please enter a single letter.");
} else {

correctGuess = false;
//update status of game
for (var k = 0; k < word.length; k++) {
  if (word[k] === guess) { answerArray[k] = guess;
  remainingLetters--;
  correctGuess = true;
}
}
if (correctGuess === false) {
  remainingGuesses --;
}
}
}
//show answers to tell the player if the won or lost
if (remainingGuesses>0 ) {
  alert(answerArray.join(" "));
  alert("You Win! The answer was " + word);
changeImage(false);
}

else {
  alert("You're Dead!!!! It was " + word);
changeImage(true);
}

//show an image based on if the player wins or loses

function changeImage(win) {
 let elementImage = document.getElementById('artwork_image');
console.log
 if (win) {
 elementImage.src =  ("https://zippy.gfycat.com/OffensiveSpitefulFruitbat.gif");
 } else {
 elementImage.src = ("https://s5.postimg.org/v1wshoxw7/Jumpinganim.gif");
 }

}
