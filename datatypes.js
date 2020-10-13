//Primitive
//Reference

//Primitive
        // Number
        // String
        // Boolean

//Reference
        // Array
        // Object
        // Function



const n1 = 9;
console.log(n1);
console.log(typeof n1); //returns type of a variable
console.log(String(n1)); //converts a number to string
console.log(n1.toString()); // another way of converting anything to string


const n2 = '8';
console.log(n2);
console.log(typeof n2); //returns type of a variable
console.log(parseFloat(n2)); //converts an string to float
console.log(parseInt(n2)); //converts an string to integer
console.log(typeof (parseFloat(n2)));
console.log(typeof (parseInt(n2)));
console.log(Number(n2));

const n3 = 5.50;
console.log(n3);
console.log(typeof n3);
console.log(parseInt(n3)) // converts float to integer

const n4 = true;
const n5 = false;

console.log(n4);
console.log(n5);
console.log(typeof n4);
console.log(typeof n5);
console.log(Number(n4)); //converts a boolean to Number, returns 1 for true
console.log(Number(n5)); //converts a boolean to Number, returns 0 for false
console.log(String(n4));
console.log(String(n5));

var arr1 = [1,2,3,4,5]; // returns array
var arr2 = new Array(1,2,3,4,5); // another type of array
console.log(arr1);
console.log(arr2);
console.log(typeof arr1);
console.log(typeof arr2);
arr1 = [2,5,7,'Hi','Hello',[10,11]]; // different datatype variables array
console.log(arr1);

arr1 = {
    name : 'Zidan',
    Id : '17-33963-1',
    CGPA : 0.00
} // object variable

console.log(arr1);


