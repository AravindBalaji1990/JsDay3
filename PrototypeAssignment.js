var  aprototype ={
    sayhello:function(){
        return "test -->"+ this.name;
    }
}


var aobj = Object.create(aprototype)
aobj.name ="testname"

var bobj = Object.create(aprototype)
bobj.name ="testtestname"

console.log(aobj.sayhello())
console.log(bobj.sayhello())