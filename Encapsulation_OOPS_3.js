class Student  {  
   name ='sample'
   marks =1000
  //parameterised constructor
    constructor(name, marks)  
    {  
       this.name = name;  
       this.marks = marks;  
    }  
    // getter and setter values
        getName()  
        {  
        // this.name = "insidegetter"
        return this.name;  
        }  

      setName(name)  
      {  
        this.name=name +'--123';  
      }  
    }
    //variable declaration for the class
const data = new Student('sam',100)
console.log(data.getName()) //

data.setName("isha")
console.log(data.getName())