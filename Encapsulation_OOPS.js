class Character {
    constructor (speed) {
        this.speed = speed
    }

    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        // usage of super -> its akeyword availabe in javascript where it invoked the parameter or variabel directly from the parent 
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

// Here's our object
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)

// Here we're accessing our public properties and methods
console.log(alien1.name) // output: Ali
alien1.sayPhrase() // output: "I'm Ali the alien!"