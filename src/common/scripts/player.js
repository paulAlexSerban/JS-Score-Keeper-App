class Player {
  constructor(player, oponent) {
    this.score = 0;
    this.player = player;
    this.oponent = oponent;
    this.isGameOver = false;
    this.winingScore = 3;
    this.init();
  }

  setupDomRefrence() {
    this.playerButton = document.querySelector(`#${this.player}__button`);
    this.oponentButton = document.querySelector(`#${this.oponent}__button`);
    this.playerDisplay = document.querySelector(`#${this.player}`);
    this.oponentDisplay = document.querySelector(`#${this.oponent}`);
  }

  setupEvents() {
    this.playerButton.addEventListener("click", () => this.updateScore())
  }

  updateScore() {
    if(!this.isGameOver) {
      this.score++
      if(this.score == this.winingScore) {
        this.isGameOver = true;
        this.playerDisplay.classList.add('has-text-success');
        this.oponentDisplay.classList.add('has-text-danger');
        this.playerButton.disabled = true;
        this.oponentButton.disabled = true;
      }
      this.playerDisplay.textContent = this.score;
    }
  }

  resetPlayerScore() {
    this.score = 0;
    this.isGameOver = false;
    this.playerDisplay.textContent = this.score;
    this.playerDisplay.classList.remove('has-text-success', 'has-text-danger');
    this.oponentDisplay.classList.remove('has-text-success', 'has-text-danger');
    this.playerButton.disabled = false;
    this.oponentButton.disabled = false;
  }

  init() {
    this.setupDomRefrence();
    this.setupEvents();
  }

}

export default Player