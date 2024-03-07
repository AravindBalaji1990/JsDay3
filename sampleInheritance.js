class Hello {
    name ="parent"
constructor(name, age){
this.name = name;
this.age = age;
}
func1() {
console.log(`hello ${this.name}`)
}

parentfunc(){
    console.log("this is from parent")
}
}

class sample extends Hello{
    constructor(name,age){
        super(name)
        // this.name = name
        this.age = age
    }

    demoFunctionChild(){
        super.parentfunc()
        // super.name
        return `demo child function ${super.name}`
    }
}

const hi = new sample('arya')

hi.func1()
console.log(hi.demoFunctionChild())