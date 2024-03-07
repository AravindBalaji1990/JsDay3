class demoA{

    arithmeticoperation = (a,b) => a+b; 
 
}

class demoB extends demoA{
    printstatement = () => console.log("thisis from the child"); 
}

const objdemob = new demoB()
objdemob.printstatement()
console.log(objdemob.arithmeticoperation(2,3))