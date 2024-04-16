//closure - whena fucntion is able to remember and access its scopeeven when its declared or executed outside its scope
//it allows a funciton to retain adn access from its parent scope - even when the parent function has completed execution

// //parent funciton
// function outerfunc(){
//     let name = "cypress"

//     // child funciton
//     //inner func has access to the outerfunc variables
//     function innerfunc(){
//         console.log(name)
//     }
//     return innerfunc
// }

// let data = outerfunc()
// data()

function outerfunc(){
        let name = "cypress"
    
        // child funciton
        //inner func has access to the outerfunc variables
        function innerfunc1(){
            console.log(name)
        }

        function innerfunc2(){
            console.log(name)
        }
        
        innerfunc1()
        innerfunc2()
    }

    outerfunc()