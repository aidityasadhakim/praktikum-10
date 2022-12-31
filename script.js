window.onload = init;

// Fungsi insiasi permainan
// Akan dijalankan saat window di refresh atau on load
function init() {
  guesses = ["rock", "paper", "scissors"];
  compChoice = "";  
  result = document.querySelector("#compGuess");
  yourScore = 0;
  compScore = 0;
}

// Fungsi menginisiasi berdasarkan pilihan
// Fungsi ini akan langsung menginisiasi pilihan komputer 
// Setelah itu fungsi ini akan langsung mengecek siapa yang memenangkan permainan
function choose(yourChoice) {
  compChoice = guesses[Math.floor(Math.random()*guesses.length)];
  var guessClass = "far fa-hand-" + compChoice;
  result.className = guessClass;
  checkWin(yourChoice, compChoice);
}

// Fungsi ini akan mengecek siapa yang memenangkan permainan
// Fungsi ini akan berjalan setelah fungsi choose() di eksekusi
// Fungsi ini akan secara otomatis mengeksekusi fungsi printResult() dan printScore()
function checkWin(yourChoice,compChoice) {
  var result = document.querySelector("#result");
  if ((yourChoice === "rock" && compChoice === "paper") || (yourChoice === "paper" && compChoice === "scissors") || (yourChoice === "scissors" && compChoice === "rock")) {
	printResult("You lost!!");
	result.style.backgroundColor = "tomato";
	compScore += 1;
  }
	else {
	  if (yourChoice === compChoice) {
		printResult("It's a draw!!");
		result.style.backgroundColor = "lightyellow";
	  }
	  else {
		printResult("You won!!");
		result.style.backgroundColor = "lightgreen";
		yourScore += 1;
	  }
	}
  printScore(yourScore, compScore);
  }

// Fungsi ini akan mencetak hasil permainan ke dalam HTML result
function printResult(result) {
  var res = document.querySelector("#result");
  res.innerHTML = result;
}

// Fungsi ini akan mencetak skor kedua pemain, yaitu user dan komputer
function printScore(you, comp) {
  document.querySelector("#yourScore").innerHTML = you;
  document.querySelector("#compScore").innerHTML = comp;
}