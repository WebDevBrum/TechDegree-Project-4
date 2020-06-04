/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 
 //TEST STATEMENTS
 
 //const phrase = new Phrase(); 
 //const game = new Game();
 
 //const phrase = new Phrase('Life is like a box of chocolates'); 
//console.log(`Phrase - phrase: ${phrase.phrase}`);
 
// const game = new Game();

//game.phrases.forEach((phrase, index) => { console.log(`Phrase ${index} - phrase: ${phrase.phrase}`); });

//console.log(Game.phrases.length);

//const logPhrase = (phrase) => { console.log(`Phrase - phrase: `, phrase.phrase); };

//const game = new Game();

//logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase());

//const game = new Game();
 
//game.getRandomPhrase().addPhraseToDisplay();

//or

//alternative method
//const game = new Game(); const randomPhrase = game.getRandomPhrase(); 
 //const phrase = new Phrase(randomPhrase.phrase); phrase.addPhraseToDisplay();


//const game = new Game();
 //game.startGame(); 
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);




// END OF TEST STATEMENTS

let game ;
const startGameBtn = document.getElementById('btn__reset');



  startGameBtn.addEventListener('click', event => {
      game = new Game();
      game.startGame();
      
   });

const keyButtons = document.querySelectorAll('.key');

keyButtons.forEach(button => {

//for (let i = 0; i < keyButtons.length; i++) {

button.addEventListener('click', event => {
  
   const BUTTON = event.target;
  console.log(BUTTON);
   game.handleInteraction(BUTTON);
});




});

document.addEventListener('keydown', event => {
	const KBUTTON = event.key;
   
   
   
   
   for (let i = 0; i < keyButtons.length; i++ ){
   
    if ((KBUTTON.toString() === keyButtons[i].innerHTML) && (keyButtons[i].disabled !== true) )  {
console.log(keyButtons[i]);

	game.handleInteraction(keyButtons[i]);}
   }
});
/*
Now that you’ve built the basics, head over to the app.js file. This is where you’ll create an event listener for the "Start Game" button that the user sees when they load your Phrase Hunter game.

● Inside the app.js file, declare a new variable called `game` that’s not set to anything.

● Then, add a "click" event listener to the HTML `<button>` element with an `id` of `btn__reset`. Inside the callback function for this click event listener, use your `game` variable to instantiate a new Game object. Call the `startGame()` method on this new Game object.*/