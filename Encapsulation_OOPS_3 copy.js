class Student  {  
  //default constructor
    constructor()  
    {  
         
    }  
    // getter and setter values
        getName()  
        {  
          return this.name;  
        }  

      setName(name)  
      {  
        this.name=name +'--123';  
      }  
    }
    //variable declaration for the class
const data = new Student()
// console.log(data.getName()) 

data.setName("isha")
console.log(data.getName())