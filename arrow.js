// Q - 1
//The function which doesn't have function Keyword &
//function name& denoted by => 
// the syntax difference in traditional function expression doesn't have 
//function keyword &consists of arrow symbol


// anonymous
var anony = function(){
    // state
}

// arrow
var arrow = () => {
    statement
}

// Q- 2
var add = (a, b) => a+b
var add1 = (a,b) => {
    return a+b
}
console.log(add1(10,6))   //explicit 
console.log(add(5,8))  //implicit 


// Q - 3
var square = n => n*n
console.log(square(4))


// Q - 4
// if the arrow function consists of only one parameter 
// then that parameter need not be enclosed in paranthesis.



// Q- 5
var cube = n => n*n*n
console.log(cube(4))


var cube1 = n => {
    return n**3
}
console.log(cube1(2))


// Q - 6
var sub = (a,b) => a-b
console.log(sub(10,4))


var sub1 = (a,b) => {
    return a-b
}
console.log(sub1(11,10))


// Q- 7
var res = () => "Hello, World!"
console.log(res())







