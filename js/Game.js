/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = "null";
  }

  /** * Creates phrases for use in game * @return {array} An array of phrases that could be used in the game */

  createPhrases() {
    const PHRASES = [
      { phrase: "Cat got your tongue" },
      { phrase: "Laughter is the best medicine" },
      { phrase: "What goes around comes around" },
      { phrase: "Dont cry over spilled milk" },
      { phrase: "A diamond in the rough" },
      { phrase: "All for one and one for all" },
      { phrase: "Read between the lines" },
      { phrase: "The calm before the storm" },
      { phrase: "Every cloud has a silver lining" },
      { phrase: "All that glitters isnt gold" },
    ];
    return PHRASES;
  }

  /** * Selects random phrase from phrases property * @return {Object} Phrase object chosen to be used */

  getRandomPhrase() {
    const NUM = Math.floor(Math.random() * this.phrases.length);
    const PHRASE = new Phrase(this.phrases[NUM].phrase);
    return PHRASE;
  }

  /** * Begins game by selecting a random phrase and displaying it to user */

  startGame() {
    const OVERLAY = document.getElementById("overlay");
    const PHRASELIST = document.getElementById("phrase").querySelector("ul");
    const LIVES = document.querySelectorAll(".tries img");
    const KEY_BUTTONS = document.querySelectorAll(".key, .wrong, .chosen ");
    OVERLAY.style.display = "none";
    this.missed = 0;

    while (PHRASELIST.firstChild) {
      PHRASELIST.removeChild(PHRASELIST.firstChild);
    }

    KEY_BUTTONS.forEach((button) => {
      button.disabled = false;
      button.className = "key";
    });

    LIVES.forEach((life) => {
      life.src = "images/liveHeart.png";
    });

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /** * Handles interaction, logic and behaviour*/

  handleInteraction(button) {
    const LETTER = button.innerHTML;
    const CHECK_LETTER = this.activePhrase.checkLetter(LETTER);
    button.disabled = true;

    if (CHECK_LETTER === false) {
      button.className = "wrong";
      this.removeLife();
    } else if (CHECK_LETTER === true) {
      button.className = "chosen";
      this.activePhrase.showMatchedLetter(LETTER);
      let GAME_WON = this.checkForWin();

      if (GAME_WON) {
        this.gameOver(true);
      }
    }
  }

  /** * Checks for winning move * @return {boolean} True if game has been won, false if game wasn't won */

  checkForWin() {
    const PHRASE_LETTERS = document.querySelectorAll(".letter");

    for (let i = 0; i < PHRASE_LETTERS.length; i++) {
      if (PHRASE_LETTERS[i].classList.contains("hide")) {
        return false;
      }
    }
    return true;
  }

  /** * Increases the value of the missed property * Removes a life from the scoreboard * Checks if player has remaining lives and ends game if player is out */

  removeLife() {
    const LIVES = document.querySelectorAll(".tries img");
    LIVES[this.missed].src = "images/lostHeart.png";
    this.missed += 1;

    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /** * Displays game over message * @param {boolean} gameWon - Whether or not the user won the game */

  gameOver(gameWon) {
    const OVERLAY = document.getElementById("overlay");
    const HEADER_MESSAGE = document.getElementById("game-over-message");

    if (gameWon) {
      OVERLAY.style.display = "";
      OVERLAY.className = "win";
      HEADER_MESSAGE.innerHTML = "Goodnight Seattle, we love you!!";
    } else if (gameWon === false) {
      OVERLAY.style.display = "";
      OVERLAY.className = "lose";
      HEADER_MESSAGE.innerHTML = "Phraser has left the building!!";
    }
  }
}
