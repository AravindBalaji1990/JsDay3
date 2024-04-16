class demoA{

    arithmeticoperation = (a,b) => a+b; 
 
}

//extends is a keyword to represent the inheritnace parent to child
class demoB extends demoA{
    printstatement = () => console.log("thisis from the child"); 
}

const objdemob = new demoB()
objdemob.printstatement()// this is from child
console.log(objdemob.arithmeticoperation(2,3))//this is from parent class