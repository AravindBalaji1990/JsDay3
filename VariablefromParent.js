class Parent{
    constructor(name){
        this.name = name
    }

    display(){
        console.log(`Parent name : ${this.name}`)
    }
}

class child extends Parent{
    constructor(name, name2){
        super(name)
        this.name2 = name2
    }
    displaychild(){
        console.log(`child name ${this.name2}`)
        console.log(`parent name ${this.name}`)
    }
}

const obj = new child('john','john2')
obj.displaychild()