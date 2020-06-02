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
      const element = document.createElement(elementName);
      return element;
     }
   
   const phraseDiv = document.getElementById("phrase");
   const phraseList = phraseDiv.querySelector("ul");
    
   for (let i = 0; i < this.phrase.length; i++){
     
     if (this.phrase.charAt(i) !== ' ') {
     
       let listItem = createElement('li');
       listItem.className = "hide letter " + this.phrase.charAt(i);
       listItem.innerHTML = this.phrase.charAt(i);
       phraseList.appendChild(listItem);
     
     } else if (this.phrase.charAt(i) === ' ') {
     
       let listItem = createElement('li');
       listItem.className = "space";
       phraseList.appendChild(listItem);
     }
    }
  }
  
  /** * Checks if passed letter is in phrase * @param (string) letter - Letter to check */
  
   checkLetter(letter) {
   
   //RETHINK HERE , PHRASE IS CONSTRUCTED
     
     //let phrase = game.activePhrase.phrase; //done
     
      for (let i = 0; i < this.phrase.length; i += 1) {
      
      if (this.phrase.charAt(i) === letter) {
        
        return true;
        
      } 
        
      }
      return false;
    }
      
   
   
   /** * Displays passed letter on screen after a match is found * @param (string) letter - Letter to display */ 
   
   showMatchedLetter(letter) {
   
     let letterMatches = document.getElementsByClassName(`hide letter ${letter}`);
   
    for (let i =0; i < letterMatches.length; i++){
     if(this.checkLetter(letter)){
       
     letterMatches[i].className = `show letter ${letter}`;
     }
    }
    }
     
  }    
 
   
   

 
 
 /**
 
 <div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>
 
 let letterButtons = document.querySelectorAll(".key");
     let selected = '';
     let phrase = game.activePhrase.phrase;
     
     for (let i = 0; i < letterButtons.length; i += 1) {

      letterButtons[i].addEventListener('click', (e) => { 
      
       selected = e.target.innerHTML;
      });
     }
 
const phraseDiv = document.getElementById("phrase");
     let phraseLetters = phraseDiv.querySelector("ul").children;
     
     for (let i = 0; i < phraseLetters.length; i += 1) {
     if (phraseLetter[i].className === (`hide letter ${letter}`)) {
     
       phraseLetter[i].className = `show letter ${letter}`;
**/