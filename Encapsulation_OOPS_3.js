class Student  
  {  
    constructor()  
    {  
       var name;  
       var marks;  
    }  

    // getter and setter values
        getName()  
        {  
          return this.name;  
        }  

      setName(name)  
      {  
        this.name=name +'324583276hdasbf';  
      }  
        
      getMarks()  
      {  
        return this.marks;  
      }  
      
    setMarks(marks)  
    {  
      this.marks=marks;  
    } 

  
    }
const data = new Student()
console.log(data.setName("isha"))
console.log(data.getName())