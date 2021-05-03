class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        if( target instanceof Unit ) {
            target.resilience -= this.power;
        }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (this.stat == "resilience") {
            if(target instanceof Unit) {
                target.resilience += this.magnitude;
            }
            else {
                throw new Error( "Target must be a unit!" );
            }
        }
        else if (this.stat == "power") {
            if(target instanceof Unit) {
                target.power += this.magnitude;
            }
            else {
                throw new Error( "Target must be a unit!" );
            }
        }
    }
}

let unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
let effect1 = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
effect1.play(unit1);
console.log(unit1.resilience);
let unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
let effect2 = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
effect2.play(unit1);
console.log(unit1.resilience);
let effect3 = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);
effect3.play(unit1);
console.log(unit1.power);
unit1.attack(unit2);
console.log(unit2.resilience);