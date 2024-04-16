class demoA{
    constructor(name){
        this.name =name
    }
    testp(){
        console.log(`${this.name} - i call this value from demoA`)
    }
}

class demoB extends demoA{
    constructor(name, marks){
        super(name)
        this.marks = marks
    }
    testc(){
        console.log(`${this.name} - i call this value from demoB`)
 
   }


}

let instancedata =new demoB('sampe',1999)
instancedata.testp()
instancedata.testc()