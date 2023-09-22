//children can override the parent 
// when the parent and the child has the same variable name /function- then how does a child overrride the parents funciton

//parent class
class Character {
    constructor (speed) {
        this.speed = speed
    }

    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

// child class
class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


// another child -> parent is Enemy
class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed) // will refer to Enemy
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

const enemy1 = new Enemy('tata', 'I am tata', 100, 500)
enemy1.attack()
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
alien1.attack() // output: I'm attacking with a power of 10!