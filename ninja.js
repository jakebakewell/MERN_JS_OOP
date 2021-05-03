class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`I am ${this.name} the ninja`);
    }

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake and gained health`);
    }
}

const ninja1 = new Ninja("Hyabusa", 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();