class Person{

    //constructor declaration in javacript
    constructor(name){
        // _ represents a private
        this._name =name
    }

    //public
    //getter -> this reurns the variable 
    getname(){
    return this._name;
    }

    //set method
    // setter -> it sets the variable
    setname(newname){
        if(typeof newname === 'string'){
            this._name = newname;
        }else{
            console.log("Invalid name")
        }
    }
}

//declaring a instance of the class
const person = new Person("sample")
console.log(person.getname())