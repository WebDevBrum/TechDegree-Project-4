/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /** * Display phrase on game board */
   
  addPhraseToDisplay() {
  
    function createElement(elementName) {
      const ELEMENT = document.createElement(elementName);
      return ELEMENT;
    }
   
   const PHRASE_DIV = document.getElementById("phrase");
	 const PHRASE_LIST = PHRASE_DIV.querySelector("ul");
    
   for (let i = 0; i < this.phrase.length; i++) {
     
    if (this.phrase.charAt(i) !== ' ') {
      const LIST_ITEM = createElement('li');
      LIST_ITEM.className = "hide letter " + this.phrase.charAt(i);
      LIST_ITEM.innerHTML = this.phrase.charAt(i);
      PHRASE_LIST.appendChild(LIST_ITEM);
     
     } else if (this.phrase.charAt(i) === ' ') {
       const LIST_ITEM = createElement('li');
       LIST_ITEM.className = "space";
       PHRASE_LIST.appendChild(LIST_ITEM);
     }
    }
  }
  
  /** * Checks if passed letter is in phrase * @param (string) letter - Letter to check */
  
   checkLetter(letter) {
   
     for (let i = 0; i < this.phrase.length; i += 1) {
      
       if (this.phrase.charAt(i) === letter) {
         return true;
       } 
      }
       return false;
    }
      
  /** * Displays passed letter on screen after a match is found * @param (string) letter - Letter to display */ 
   
   showMatchedLetter(letter) {
     const LETTER_MATCHES = document.querySelectorAll(`.${letter}`);
   
     if (this.checkLetter(letter)){ 

       LETTER_MATCHES.forEach(letterMatch => {
         letterMatch.className = "show letter " + letter;
       });
    }
   }
}    

   
   

 
 
 