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
    let num = Math.floor(Math.random() * this.phrases.length);
    let phrase = new Phrase(this.phrases[num].phrase);
    return phrase;
    
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
		
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
		//enable keyboard buttons and chage class to key
		//reset scorebard images 
		//reset missed total
  }
    
   /** * Handles interaction, logic and behaviour*/
   
   handleInteraction(button) {
     console.log(button);
		 button.disabled = true;
		 let letter = button.innerHTML;
		 let checkLetter = this.activePhrase.checkLetter(letter);
		 console.log(checkLetter);
		 if (checkLetter === false) {
			 button.className = 'wrong';
			 this.removeLife();
		 } else if (checkLetter === true) {
			 button.className ='chosen';
			 this.activePhrase.showMatchedLetter(letter);
			 let gameWon = this.checkForWin();
			 
			 if (gameWon) {
				 this.gameOver(true);
			 }
		 }
		 
   
   }
   
   /** * Checks for winning move * @return {boolean} True if game has been won, false if game wasn't won */ 
   
   checkForWin() {
   
     let phraseLetters = document.querySelectorAll(".letter");
     console.log(phraseLetters);

     for (let i = 0; i < phraseLetters.length; i++) {
       
       if (phraseLetters[i].classList.contains("hide")) {
         console.log(phraseLetters[i].classList);
         return false;
         } 
          
        }
         
         return true;
     }
   
  
   
   /** * Increases the value of the missed property * Removes a life from the scoreboard * Checks if player has remaining lives and ends game if player is out */ 
   
   removeLife() {
   
    let lives = document.querySelectorAll(".tries img");
   
    lives[this.missed].src = "images/lostHeart.png";
    
    this.missed += 1;
    
    if (this.missed === 5) {
      this.gameOver(false);
    }
   };
   
   
   /** * Displays game over message * @param {boolean} gameWon - Whether or not the user won the game */ 
   
   gameOver(gameWon) {
   
     const overlay = document.getElementById('overlay');
     let headerMessage = document.getElementById("game-over-message");
   
     if (gameWon) {
       overlay.style.display = '';
       overlay.className = "win";
       headerMessage.innerHTML = "Winner winner chicken dinner";
    
     } else if (gameWon === false) {
    
       overlay.style.display = '';
       overlay.className = "lose";
       headerMessage.innerHTML = "You lose, loser";
   }
  }
}
 
 