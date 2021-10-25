// 1
// console.log(hello);                                   
// var hello = 'world'; 
var hello = 'world'; 
console.log(hello);  

// 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

// 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.="support method from-rainbow">log(brendan);
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

var food = 'chicken';
function eat(){
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
    
}
eat();
console.log(food);

// 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
var mean = function() {
    var food = "fish";
    food = "chicken";
    console.log(food);
    console.log(food);
}
mean(); 

// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
var genre = "disco";
console.log(genre);
function rewind() {
    var genre = "r&b";
    genre = "rock";
    console.log(genre);
    console.log(genre);
}
rewind();
console.log(genre);

// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
const dojo = "san jose";
console.log(dojo);
function learn() {
    var dojo = "burbank";
    dojo = "seattle";
    console.log(dojo);
    console.log(dojo);
}
learn();
console.log(dojo);
// san jose
// seattle
// seattle
// san jose

// 8
//console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

