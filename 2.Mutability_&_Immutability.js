// Immutability adalah sebuah konsep dimana semua variabel, setelah sekali didefinisikan dan diassign sebuah nilai, nilai tersebut tidak boleh digantikan atau berubah. Hal ini memiliki keuntungan dimana kita terhidar dari terjadinya side-effects, dimana satu proses dapat mempengaruhi nilai sebuah variabel secara global dan menyebabkan error yang relatif sulit untuk di debug.

// mutable variable
var mutableNumber = 5;
mutableNumber = 7;

// immutable variable
const immutableNumber = 3;
// immutableNumber = 1; // this operation will fetch an error -> TypeError: Assignment to constant variable.

// mutable array
var mutableHobbies = ["Reading"];
mutableHobbies.push("Gaming");

console.log(mutableHobbies); // ["Reading", "Gaming"];

// immutable array (ES5 using concat)
var immutableHobbies = ["Reading"];
var newUpdatedImmutableHobbiesES5 = immutableHobbies.concat("Gaming");

console.log(immutableHobbies); // ["Reading"]
console.log(newUpdatedImmutableHobbiesES5); // ["Reading", "Gaming"];

// immutable array (ES6 using spread operator)
var newUpdatedImmutableHobbiesES6 = [...immutableHobbies, "Gaming"];

console.log(newUpdatedImmutableHobbiesES6); // ["Reading", "Gaming"];

// mutable Object
var myMutableObj = { name: "John Doe", age: 20 };
myMutableObj.age = 21;

console.log(myMutableObj); // { name: "John Doe", age: 21 };

// immutable Object (ES5 using Object.assign)
var myImmutableObj = { name: "John Doe", age: 20 };
const newUpdatedObjES5 = Object.assign({}, myImmutableObj, { age: 21 });

console.log(myImmutableObj); // { name: "John Doe", age: 20 };
console.log(newUpdatedObjES5); // { name: "John Doe", age: 21 };

// immutable Object (ES6 using spread operator)
const newUpdatedObjES6 = { ...myImmutableObj, age: 21 };

console.log(myImmutableObj); // { name: "John Doe", age: 20 };
console.log(newUpdatedObjES6); // { name: "John Doe", age: 21 };