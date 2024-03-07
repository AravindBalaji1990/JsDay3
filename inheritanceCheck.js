class classA{
    constructor(name){
        this.name = name;
    }

    demoFunction(){
        return `Hello my name ${this.name}`
    }
}

class classB extends classA{

    constructor(name,age){
        // super(name)
        this.name = name
        this.age = age
    }

    demoFunctionChild(){
        return `demo child function ${this.name}`
    }
}
// object for child class 
const objectData = new classB("john")

console.log(objectData.demoFunction())
console.log(objectData.demoFunctionChild())