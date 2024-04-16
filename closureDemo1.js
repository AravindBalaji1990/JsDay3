//closure with encapsulation
function Person(name){
    let coursefee = 100

    return{
        setname: function(newcourse){
            name = newcourse
        },

        getname: function(){
            return name
        },

        getcourse: function(){
            return course;
        },

        addcourse: function(){
            return ++coursefee;
        }

    }
}

let objperson = Person('cypress')
console.log(objperson.getname())