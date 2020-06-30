/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const START_GAME_BTN = document.getElementById("btn__reset");
const KEY_BUTTONS = document.querySelectorAll(".key");

// Initialises a new game
START_GAME_BTN.addEventListener("click", (event) => {
  game = new Game();
  game.startGame();
});

// Converts letter button click to interaction
KEY_BUTTONS.forEach((button) => {
  button.addEventListener("click", (event) => {
    const BUTTON = event.target;
    game.handleInteraction(BUTTON);
  });
});

// Coverts keyboard click to interaction via on screen buttons
document.addEventListener("keydown", (event) => {
  const KBUTTON = event.key.toLowerCase();

  for (let i = 0; i < KEY_BUTTONS.length; i++) {
    if (
      KBUTTON.toString() === KEY_BUTTONS[i].innerHTML &&
      KEY_BUTTONS[i].disabled !== true
    ) {
      game.handleInteraction(KEY_BUTTONS[i]);
    }
  }
});

/*

TEST STATEMENTS
 
const phrase = new Phrase(); 
const game = new Game();
 
const phrase = new Phrase('Life is like a box of chocolates'); 
console.log(`Phrase - phrase: ${phrase.phrase}`);
 
const game = new Game();

game.phrases.forEach((phrase, index) => { console.log(`Phrase ${index} - phrase: ${phrase.phrase}`); });

console.log(Game.phrases.length);

const logPhrase = (phrase) => { console.log(`Phrase - phrase: `, phrase.phrase); };

const game = new Game();

logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase());

const game = new Game();
 
game.getRandomPhrase().addPhraseToDisplay();

or

alternative method
const game = new Game(); const randomPhrase = game.getRandomPhrase(); 
const phrase = new Phrase(randomPhrase.phrase); phrase.addPhraseToDisplay();

const game = new Game();
game.startGame(); 
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

 END OF TEST STATEMENTS */
