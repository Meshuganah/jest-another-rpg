const Potion = require('../lib/Potion.js');
const Character = require('../lib/Character');

class Enemy extends Character{
    constructor(name, weapon) {
        //Call super constructor here:
        super(name);

        this.weapon = weapon;
        this.potion = new Potion;

    };

    getDescription() {
        return `A ${this.name} holding ${this.weapon} has appeared!`;
    };
};

module.exports = Enemy;