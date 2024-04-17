//parent constructor function
function demoA(name){
    this.name = name;
}

// i add a funciton named getName to demoA parent class via prototpye way 
demoA.prototype.getName = function(){
    return this.name;
}

//child constructor function -> it should inherit form parent

function demoB(name, salary){
    demoA.call(this, name);// i am re-suing the name form the parent 
    this.salary = salary
}

//used to create a new object witha  specififed protoype object
// create a pbject that inherits proties/method from another object
//object.create - its keyword in javascript use to creata a new object wiht tht especificed prototype
//it allows to create an object that inherits directly from the specified prototype object
// syntax of object.create(proto,[propertiesobject])
// proto - prototype of newly created object . can be null or a object
//propertiesObject - optional, it will add to a newly created object with corrspeonding names
demoB.prototype =Object.create(demoA.prototype)
demoB.prototype.constructor  = demoB

demoB.prototype.getSalary = function(){
    return this.salary
}


const objdemoa= new demoA("javascript")
const objdemob= new demoB("cypress",10000)

console.log(objdemoa.getName())
console.log(objdemob.getName())
console.log(objdemob.getSalary())