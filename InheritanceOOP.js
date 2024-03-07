//Parent
class Enemy {

    //funciton - with parameterised value
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}

//child
class Alien extends Enemy {
    constructor (name, phrase,power) {
        // super keyword - always it refers to parent
        super(power)
        // delcaration of the variables
        this.name = name
        this.phrase = phrase
        this.species = "demo"
    }
    // functions in the child class
    fly = () => console.log("I am flying!!")
    sayPhrase = () => console.log(this.phrase)
}

// child class override the parent class
// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10)
const alien2 = new Alien("Lien", "Run for your lives!", 15)
const enemy1 = new Enemy(1000)

// child object is trying to use theparent  function
alien2.attack() 
// parent as usual call the method within it 
 enemy1.attack();