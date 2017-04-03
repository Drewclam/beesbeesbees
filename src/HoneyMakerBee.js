var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  // color property inherited from superclass Bee
  // food property falls through superclass Bee to it's superclass Grub
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
// eat method falls through superclass Bee to it's superclass Grub
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
