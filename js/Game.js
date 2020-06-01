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
    overlay. style.display = 'none';
   
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
    
   /** * Handles interaction, logic and behaviour*/
   
   handleInteraction() {
   
   
   }
   
   /** * Checks for winning move * @return {boolean} True if game has been won, false if game wasn't won */ 
   
   checkForWin() {
   
   }
   
   /** * Increases the value of the missed property * Removes a life from the scoreboard * Checks if player has remaining lives and ends game if player is out */ 
   
   removeLife() {
   
   };
   
   
   /** * Displays game over message * @param {boolean} gameWon - Whether or not the user won the game */ 
   
   gameOver(gameWon) {
   
   }
   
   
 }
 
 