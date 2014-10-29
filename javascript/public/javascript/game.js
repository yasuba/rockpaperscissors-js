function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
  if (this.isSamePick()) return null;
  if (this.winningAction(this.player1.pick, this.player2.pick)){
    return this.player1;
  } else {
    return this.player2;
  }
};

Game.prototype.loser = function() {
  if (this.winner() === this.player1 ) {
    return this.player2;
  } else {
    return this.player1;
  }
};

Game.prototype.PAIRS = {
    rock:     { scissors: 'crushes', lizard: 'crushes' },
    paper:    { rock: 'covers', spock: 'disproves'  },
    scissors: { paper: 'cut', lizard: 'decapitate' },
    lizard:   { spock: 'poisons', paper: 'eats' },
    spock:    { scissors: 'smashes', rock: 'vaporizes' }
  };

Game.prototype.winningAction = function(winnerPick, loserPick) {
    return this.PAIRS[winnerPick][loserPick];
  };

Game.prototype.isSamePick = function() {
  return this.player1.pick === this.player2.pick;
};


Game.prototype.winningMessage = function() {
  if (this.isSamePick()) {
    return "It was a draw";
  } else {
  return this.winner().name + "'s " + this.winner().pick + " " + this.PAIRS[this.winner().pick][this.loser().pick] + " " + this.loser().name + "'s " + this.loser().pick;}
};




