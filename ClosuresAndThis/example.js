//Closures!
    //A closure is a function that takes advantage of variables within an outer function
    //Only variables used in the inner function are remembered!
        //Meaning, if the inner function doesn't use an outer fn's variable, then
        //it won't know about it!
    //Closures help us make private variables like in other languages!!!
    
//example:

console.log(outer()());

function outer(){
    var str = "Closures are";
    return function inner(){
        return str + ' awesome!';
    }
}

//Creating private variables:
var counter1 = counter();

console.log(counter1(), counter1());

function counter(){
    var count = 0;
    return function inner(){
        count++; //accessing count on its own on the console will give you an error!
        return count;
    }
}

//Creating OOP-like methods!

var first = classRoom();
first.addInstructor("Patrick");
console.log(first.getInstructors());

//Using slice, we can't do something like: first.getInstructors().pop()!
function classRoom(){
    var instructors = ["Elie", "Colt"];
    return {
        getInstructors: function(){
            return instructors.slice();
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors.slice(); //return copies of the array because we don't want people to manipulate the data!
        }
    }
}


