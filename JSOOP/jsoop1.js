// Creating manual object literal
console.log("--- Creating manual object literal");
var person = {};
var person = {
	name:['Anushree','Desai'],
	age: 24,
	gender: 'female',
	interests: ['painting','travelling'],
	greeting:function(){
		console.log("Hi, I\'m "+this.name[0]+" "+this.name[1]+".");
	}
};
person.greeting();

//Define an object with a simple function and returning the object
function createNewPerson(name) {
  console.log('--- Define an object with a simple function and returning the object');
  var obj = {};
  obj.name = name;
  obj.greeting = function () {
    console.log('Hi! I\'m ' + this.name + '.');
  }
  return obj;
}
var obj = createNewPerson('Mahek');
obj.name;
obj.greeting();

// Object instantiating through constructor
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
  };
}

console.log("--- Instantiating objects  through constructor");
var person1 = new Person('Anushree',24);
console.log('person1.name : '+person1.name);
console.log('person1.age : '+person1.age);
person1.greeting();

var person2 = new Person('Mahek',18);
console.log('person2.name : '+person2.name);
console.log('person2.age : '+person2.age);
person2.greeting();

// creating object through the Object() constructor
console.log("--- creating object through the Object() constructor");
var person3 = new Object();
person3.name = 'Sneha';
person3['age'] = 24;
person3.greeting = function() {
console.log('Hi! I\'m ' + this.name + '.');
}
person3.greeting();

//creating object by passing object literal to the Object() constructor as a parameter
console.log("--- creating object by passing object literal to the Object() constructor as a parameter");
var person4 = new Object({
  name: 'Shreya',
  age: 24,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
});
person4.greeting();

//creating object through create method
console.log("--- creating object through create method");
var person5 = Object.create(person4);
console.log('person5.name : '+person5.name);
console.log('person5.age : '+person5.age);
person5.greeting();
person5.name = "Shreya Change";
console.log('person5.name : '+person5.name);
console.log('person4.name : '+person4.name);

// creating object through contructor property
//var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);