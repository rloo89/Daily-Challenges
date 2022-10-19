class Person {
    constructor (name, age) {
        this.height = 100;
        this.name = name;
        this.age = age;
}

// regular method

sayHello () {
    console.log(`Hello my name is ${this.name}`);
}

becomeOlder() {
this.age++;
    }
}

class Student extends Person {
    constructor (name, age) {
        super(name, age);
        this.grade = 100;
    }
}




// const janeObj = new Person("Jane", 30);
// const rickObj = new Person("Rick", 50);



class Educator extends Person {}


const navObj = new Student ("Nav", 25);
const christefObj = new Student ("Christef", 19, 98);
const nolanObj = new Educator ("Nolan", 31);


// what does new MEAN!?





console.log (navObj);
console.log (nolanObj);


// Call methods using an event listener

const hello = document.querySelector(".say-hello-btn");

helloBtn.addEventListener("click", bobObj.sayHello);

// This might not work!

// helloBtn.addEventListener("click", bobObj.sayHello);

// Solution 1: wrap it in an anonymous function

helloBtn.addEventListener("click", () =>  bobObj.sayHello());



// Solution 2: Same thing, but as an arrow function inside the class ;
say Hello = () => {
    console.log(this);
    console.log(`Hello my name is ${this.name}` and I am ${this.age});
}


// WHAT DOES sayHello() parenthesis mean?

// Classes are not hoisted in Javascript