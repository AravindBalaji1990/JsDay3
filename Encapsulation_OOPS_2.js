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
        this.name=name +'son';  
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
      // object creation
      //var obj = new classname();
    var stud=new Student();  
     stud.setName("John");  
     stud.setMarks(80);  
     console.log(stud.getName()+" "+stud.getMarks());  