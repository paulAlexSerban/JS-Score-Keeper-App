class Scorekeeper {
  constructor() {
    this.init();
  }

  setupDomRefrence() {
    this.playerOneDisplay = document.querySelector('#player-one');
    this.playerTwoDisplay = document.querySelector('#player-two');
    this.btnPlayerOne = document.querySelector('#player-one__button');
    this.btnPlayerTwo = document.querySelector('#player-two__button');
    this.btnReset = document.querySelector('#reset-button');
    this.selectWinScore = document.querySelector('#playTo');
  }

  setupScore() {
    this.playerOne = 0;
    this.playerTwo = 0;
    this.winScore = 6;
    this.isGameOver = false;
  }

  setupEvents() {
    this.btnPlayerOne.addEventListener('click', () => {
      if(!this.isGameOver) {
        this.playerOne++;

        if(this.playerOne === this.winScore) {
          this.isGameOver = true;
          this.playerOneDisplay.classList.add('has-text-success');
          this.playerTwoDisplay.classList.add('has-text-danger');
          this.btnPlayerOne.disabled = true;
          this.btnPlayerTwo.disabled = true;
        }

        this.playerOneDisplay.textContent = this.playerOne;
      }
    });

    this.btnPlayerTwo.addEventListener('click', () => {
      if(!this.isGameOver) {
        this.playerTwo++;

        if(this.playerTwo === this.winScore) {
          this.isGameOver = true;
          this.playerTwoDisplay.classList.add('has-text-success');
          this.playerOneDisplay.classList.add('has-text-danger');
          this.btnPlayerOne.disabled = true;
          this.btnPlayerTwo.disabled = true;
        }

        this.playerTwoDisplay.textContent = this.playerTwo;
      }
    });

    this.btnReset.addEventListener("click", () => this.resetScore());

    this.selectWinScore.addEventListener("change", e => {
      this.winScore = parseInt(e.target.value);
      this.resetScore();
    });
  }

  resetScore() {
    this.isGameOver = false;
    this.playerOne = 0;
    this.playerTwo = 0;
    this.playerOneDisplay.textContent = this.playerOne;
    this.playerTwoDisplay.textContent = this.playerTwo;
    this.playerOneDisplay.classList.remove('has-text-success', 'has-text-danger');
    this.playerTwoDisplay.classList.remove('has-text-success', 'has-text-danger');
    this.btnPlayerOne.disabled = false;
    this.btnPlayerTwo.disabled = false;
  }

  init() {
    this.setupDomRefrence();
    this.setupScore();
    this.setupEvents();
  }
}

export default Scorekeeper;