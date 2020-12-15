//// Callback and promises - check if user has access + send message
//ES5
let access = true;
function successCall(message) {
    console.log('You have access! ' + message);
}

function unsuccessCall(message) {
    console.log('You dont have access! ' + message);
}

function test(){
    if (access) {
        successCall('Enjoy the work');
    } else {
        unsuccessCall('Write to the admin');
    }
}
test();

//ES6
function test21 () {
    return new Promise ((resolve, reject) => {
        if (access) {
            resolve('Enjoy the work 21');
        } else {
            reject('Write to the admin 21');
        }
    });
}
test21()
    .then((message) => console.log('Success! ' + message))
    .catch((message) => console.log('Failed! ' + message))

/* console.log('---(.)(.)---');

//// Classes
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello = (name, age) => console.log(`Hi, my name is ${this.name} and Im ${this.age} years old`);
}


class Gamer extends Person{
    tellYourName = () => console.log(this.name);
    tellYourAge = () => console.log(this.age);
}

const gamer = new Gamer('Lukas Nagy', 29 );
gamer.tellYourName();
gamer.tellYourAge();
gamer.sayHello();
console.log(gamer.name);

console.log('---(.)(.)---');
////Promises - new in ES6 - to be added

//// Export and Import modules
// function.js file with export
/*
export default function detail(name, age) {
    return `Hi, my name is ${name} and Im ${age} years old`; 
}


// import js file

import {detail} from '/function.js'

console.log(detail('Jakub', 20));


////Array and object destructing
//ES5
const contacts = {
    name: 'Nagyova',
    famillyName: 'Weberova',
    age: 50
}

let name = contacts.name;
let famillyName = contacts.famillyName;
let age = contacts.age;

console.log(name);
console.log(famillyName);
console.log(age);

//ES6 - renaming the variables with the colon :
let {name:name2, famillyName:famillyName2, age:age2} = contacts;

console.log(name2);
console.log(famillyName2); 
console.log(age2); 

//ES6 for arrays
const arres6 = [20,10,30];

let [value1, value2, value3] = arres6;
console.log(value1);
console.log(value2);
console.log(value3);

console.log('---(.)(.)---');

//// Default parameters
//ES5
function paramES5(name) {
    return name = name || 'Another way undefined';
}
console.log(paramES5()); //Another way undefined
console.log(paramES5('Patrik')); //Patrik

//ES6
function param2(name = 'name unknown') {
    return name;
}
console.log(param2());
console.log(param2('Jiri'));

//ES6 arrow function
let param3 = (name='name unknown arrow') => name;

console.log(param3());
console.log(param3('John'))

console.log('---(.)(.)---');

//// Template literals
//ES5
function tempLit(name, age){
    return 'Hi, my name is ' + name + ', and Im ' + age + ' years old';
}
console.log(tempLit('Klara', 30));
//ES6
function tempLit2(name, age) {
    return `Hi, my name is ${name}, and Im ${age} years old`;
}
console.log(tempLit('Karel', 25));

console.log('---(.)(.)---');

////ES5 build-in functions map, filter, reduce
//ES5
const myArray=['tony', 'sara', 'said', 5];

let Arr1 = myArray.map(function(item){
    return item;
})
console.log(Arr1);

//ES6
let Arr2 = myArray.map((item) => item);
console.log(Arr2);

console.log('---(.)(.)---');

////ES5 vs Arrow function ES6
//ES5
function myNew(name) {
    return 'hello' + name;
}
console.log(myNew(' Oldrich'));
//ES6
var myNewES6 = (name) => `hello ${name}`;
console.log(myNewES6('Pepa'));

console.log('---(.)(.)---')

////different ways to declare function
//function expression
var myFunc1 = function (name) {
    let inside2 = 'do you see me?';
    console.log(`Hi ${name}`);
}

// function declaration
function myFunc2 (name) {
    console.log(`Hi ${name}`);
    
}

// IIFE
(function myFunc(name) {
    let inside = 'visible only inside';
    console.log(`Hi ${name}`);
    console.log(inside);
})('Lukas')

myFunc1('Pida');
myFunc2('Martina');
console.log(myFunc1(this));
console.log(myFunc2(this));
console.log(myFunc1.name);
console.log(myFunc2.name);
console.log(window.myFunc1);

*/