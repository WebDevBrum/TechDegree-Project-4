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
    
    
   
     //const div = createElement('div');
   //  const list = createElement('ul')';
     //const listItem = createElement('li');
 //    div.className = "section";
 //    div.id = "phrase";
//     div.appendChild(list);
     
     for (let i = 0; i < this.phrase.length; i++){
     
     
     if(this.phrase.charAt(i) !== '') {
      let listItem = createElement('li');
      listItem.className = "hide letter " + this.phrase.charAt(i);
      listItem.innerHTML = this.phrase.charAt(i);
      phraseList.appendChild(listItem);
     
     } else if (this.phrase.charAt(i) === '') {
       let listItem = createElement('li');
       listItem.className = "space";
       phraseList.appendChild(listItem);
     
     }
     
     
     }
       
   };
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

**/