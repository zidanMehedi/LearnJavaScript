const arr1 = ['str',1,2,3,4,5,['Hello',6,7,8],'Boy'];
const arr2 = new Array('str',1,2,3,4,5,['Hello',6,7,8],'Boy');

console.log(arr1);
console.log(arr2);

console.log(arr1[0]); //returns an element of an array based on index

console.log(arr2[6][0]); //returns an element of a nested array based on index

console.log(arr1.length); //returns length of an array

console.log(Array.isArray(arr1)); //returns true or false if the given variable is an array or not 
console.log(Array.isArray(arr2)); //returns true or false if the given variable is an array or not
console.log(Array.isArray(arr1[6])); //returns true or false if the given variable is an array or not
console.log(Array.isArray(arr2[7])); //returns true or false if the given variable is an array or not

arr1[0] = 'Zidan'; //explicitely assigns or replaces an element inside an array
console.log(arr1);

console.log(arr1.indexOf(4)); //returns the index of an element
console.log(arr2.indexOf('Boy')); //returns the index of an element

arr1.push('What\'s Up'); //inserts an element in the last index
console.log(arr1);

arr1.unshift(1000); //inserts an element in the first index
console.log(arr1);

arr1.pop(); //removes an element from last index
console.log(arr1);

arr1.shift(); //removes an element from first index
console.log(arr1);

arr1.splice(2,1); //eleminates the elements starting from start parameter as index and up to second parameter as the number of elements needed to be delete from start parameter
console.log(arr1);

arr2.reverse(); //reverse the elements of an array
console.log(arr2);

console.log(arr1.concat(arr2)); //concates two and more arrays

let obj = {
    name : 'Zidan',
    id : 1,
    set : [1,3,5]
} //javascript object

console.log(obj.name); //accesses object element
console.log(obj['name']); //another way of access
console.log(obj.set);
console.log(obj.set[1]);

obj = {
    "name" : 'Mehedi',
    'id' : 2,
    "set" : [2,4,7]
} //JSON object

console.log(obj.name); //accesses object element
console.log(obj['name']); //another way of access
console.log(obj.set);
console.log(obj.set[1]);

obj.name = 'Hassan'; //explicitely replaces data
console.log(obj);