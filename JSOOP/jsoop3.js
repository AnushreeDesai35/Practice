function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  
};

// Person.greeting = function(){console.log('hoii')};
Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};
//Person.prototype.fullName = this.name.first + ' ' + this.name.last;

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

var Farmer=function(){
	this.type='farmer';
}

//	Farmer.prototype = new Person();			
// Person.prototype.farewell = function() {
  // console.log(this.name.first + ' has left the building. Bye for now!');
// }

// person1.farewell();

var person2 = Object.create(person1);

var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);