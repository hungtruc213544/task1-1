//Test 1 - 1 -1 
// Question
// Why output in the console shown as 4 (numeric) four times?
// Anwser
// That the for loop executes first, then it looks for the i value, which is 5, and then outputs four times
//Test 1 - 1
for (var i = 0; i < 4; i++) {
    timeout(i);
    function timeout(i) {
        setTimeout(() => console.log(i), 0);
    }
}

//Test 1 - 2
function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Running(place) {
    return `${this.name} age of ${this.age} likes to run in ${place}`;
}

var y = Person('James', '18');
var x = Running('Senayan');
console.log(x);

//Test 1 - 3
var Person = function (name) {
    this.fullName = name;
    this.walking = () => {
        return `${this.fullName} is walking`;
    }
    this.running = function () {
        return `${this.walking()} and then running`;
    }
}


var x = new Person('John Doe');
console.log(x.running());