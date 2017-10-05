

  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guesses;
          counter += 1;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


var words = ["cat", "monkey", "snake", "horse", "fox", "zebra"];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}
var remainingLetters = word.length;

var remainingGuesses = 6;
var correctGuess;


while (remainingLetters > 0 && remainingGuesses > 0 ) {
//Game code goes here
//Show the player their progress
alert(answerArray.join(" "));
//Take input from the player
var guess = prompt ("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
  break;
} else if (guess.length !== 1 ){
  alert("Please enter a single letter.");
} else {

correctGuess = false;
for (var j = 0; j < word.length; j++) {
  if (word[j] === guess) { answerArray[j] = guess;
  remainingLetters--;
  correctGuess = true;
}
}
if (correctGuess === false) {
  remainingGuesses --;
}
}
}
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
