/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 
 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = 'null';
   }
   
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
 }
 
 