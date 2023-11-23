class Person{
    constructor(name){
        // _ denotes private
        this._name =name
    }

    //public
    getname(){
return this._name;
    }

    //set method
    setname(newname){
        if(typeof newname === 'string'){
            this._name = newname;
        }else{
            console.log("Invalid name")
        }
    }
}

const person = new Person("sample")
console.log(person.getname())