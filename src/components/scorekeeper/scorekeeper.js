import Player from '../../common/scripts/player';

class Scorekeeper {
  constructor() {
    this.players = {
      playerOne: new Player('playerOne', 'playerTwo'),
      playerTwo: new Player('playerTwo', 'playerOne')
    }
    this.init();
    this.setupScore();
  }

  setupDomRefrence() {
    this.btnReset = document.querySelector('#reset-button');
    this.selectWinScore = document.querySelector('#playTo');
  }

  setupScore() {
    this.winScore = this.selectWinScore.value;
    Object.values(this.players).forEach(player => player.isGameOver = false)
  }

  setupEvents() {
    this.btnReset.addEventListener("click", () => this.resetScore());

    this.selectWinScore.addEventListener("change", e => {
      this.winScore = parseInt(e.target.value);
      this.resetScore();
    });
  }

  resetScore() {
    this.isGameOver = false;
    Object.values(this.players).forEach(player => player.winingScore = this.winScore);
    Object.values(this.players).forEach(player => player.resetPlayerScore());
  }

  init() {
    this.setupDomRefrence();
    this.setupEvents();
  }
}

export default Scorekeeper;