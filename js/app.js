/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 
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

const game = new Game();
 
game.getRandomPhrase().addPhraseToDisplay();

//or


//const game = new Game(); const randomPhrase = game.getRandomPhrase(); const phrase = new Phrase(randomPhrase.phrase); phrase.addPhraseToDisplay();