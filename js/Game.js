/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = 'null';
   }
   
/** * Creates phrases for use in game * @return {array} An array of phrases that could be used in the game */ 
   
  createPhrases() {
    const phrases = [
      { phrase: "Cat got your tongue"},
      { phrase: "Laughter is the best medicine" },
      { phrase: "What goes around comes around" },
      { phrase: "Dont cry over spilled milk"},
      { phrase: "A diamond in the rough"}
     ]
      return phrases;
    }
    
/** * Selects random phrase from phrases property * @return {Object} Phrase object chosen to be used */ 
    
  getRandomPhrase() {
    const NUM = Math.floor(Math.random() * this.phrases.length);
    const PHRASE = new Phrase(this.phrases[NUM].phrase);
    return PHRASE;
    
    //or and test with alternstive method
    //return this.phrases[num];
   }
    
/** * Begins game by selecting a random phrase and displaying it to user */ 
    
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
   
		//remove ul elements
		const phraseList = document.getElementById("phrase").querySelector("ul");
		//const phraseList = phraseDiv.querySelector("ul");
		
		while (phraseList.firstChild) {
			
			phraseList.removeChild(phraseList.firstChild);
		
		}
		
		//enable keyboard buttons and chage class to key
		
		const keyButtons = document.querySelectorAll('.key, .wrong, .chosen ');

keyButtons.forEach (button => {

button.disabled = false;
button.className = 'key';

});

//reset scorebard images 
		//reset missed total
		
		this.missed = 0;
		
		
		let lives = document.querySelectorAll(".tries img");
		
	lives.forEach(life => {
   
    life.src = "images/liveHeart.png";
		
});
		
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    
    
		
		
		
		
		
  }
    
   /** * Handles interaction, logic and behaviour*/
   
   handleInteraction(button) {
     
		 button.disabled = true;
		 const LETTER = button.innerHTML;
		 const CHECK_LETTER = this.activePhrase.checkLetter(LETTER);
     
     
		 if (CHECK_LETTER === false) {
			 button.className = 'wrong';
			 this.removeLife();
		 } else if (CHECK_LETTER === true) {
			 button.className ='chosen';
			 this.activePhrase.showMatchedLetter(LETTER);
			 let gameWon = this.checkForWin();
			 
			 if (gameWon) {
				 this.gameOver(true);
			 }
		 }
		 
    
   }
   
   /** * Checks for winning move * @return {boolean} True if game has been won, false if game wasn't won */ 
   
   checkForWin() {
   
     const PHRASE_LETTERS = document.querySelectorAll(".letter");
     

  for (let i = 0; i < PHRASE_LETTERS.length; i++) {
       
       if (PHRASE_LETTERS[i].classList.contains("hide")) {
         
         return false;
         } 
          
        }
         
         return true;
     }
   
  
   
   /** * Increases the value of the missed property * Removes a life from the scoreboard * Checks if player has remaining lives and ends game if player is out */ 
   
   removeLife() {
   
    const LIVES = document.querySelectorAll(".tries img");
   
    LIVES[this.missed].src = "images/lostHeart.png";
    
    this.missed += 1;
    
    if (this.missed === 5) {
      this.gameOver(false);
    }
   };
   
   
   /** * Displays game over message * @param {boolean} gameWon - Whether or not the user won the game */ 
   
   gameOver(gameWon) {
   
     const OVERLAY = document.getElementById('overlay');
     const HEADER_MESSAGE = document.getElementById("game-over-message");
   
     if (gameWon) {
       OVERLAY.style.display = '';
       OVERLAY.className = "win";
       HEADER_MESSAGE.innerHTML = "Goodnight Seattle, we love you!!";
    
     } else if (gameWon === false) {
    
       OVERLAY.style.display = '';
       OVERLAY.className = "lose";
       HEADER_MESSAGE.innerHTML = "Phraser has left the building!!";
   }
  }
}
 
 