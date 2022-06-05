function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return `My name is ${this.name} and I am ${this.age}`
}

function NewPerson(constructor, ...args) {
    // We create a person using Object create, sending the prototype
    let person = Object.create(constructor.prototype);

    // apply function to pass all the arguments to the object
    constructor.apply(person, args);
    return person;
}

let jack = NewPerson(Person, 'Jack', 25);
let john = new Person('John', 30);
console.log(john.introduce());
console.log(jack.introduce());

// jack is an instance of Person
console.log(jack instanceof Person);
