function Player(name) {
	this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
};

Player.prototype.randomChoice = function(weapons) {
  this.pick = weapons[Math.floor(Math.random()*weapons.length)];
  return this.pick;
};


