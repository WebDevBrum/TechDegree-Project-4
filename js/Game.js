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
    
   //const game = new Game();
   const overlay = document.getElementById('overlay');
   overlay. style.display = 'none';
   
   this.activePhrase = this.getRandomPhrase();
   this.activePhrase.addPhraseToDisplay();
    
    };
    
   /** The `startGame()` method hides the start screen overlay (the `div` element with an `id` of `overlay`), calls the `getRandomPhrase()` method to select a Phrase object from the Game object’s array of phrases, and then adds the phrase to the gameboard by calling the `addPhraseToDisplay()` method (which is a method on the Phrase class) on the selected Phrase object. The selected phrase should be stored in the Game’s `activePhrase` property, so it can be easily accessed throughout the game. **/
 }
 
 