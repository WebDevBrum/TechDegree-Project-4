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
  
 // return this.phrases[num]; 
    
    
    //or??
    let phrase = new Phrase(this.phrases[num].phrase);
    return phrase;
    };
 }
 
 