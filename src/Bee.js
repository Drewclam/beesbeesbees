var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  // this.food is inherited from superclass Grub
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
// eat method is inherited from superclass Grub

