const str1 = "Hello Zidan";
const str2 = "How Are You?";

// console.log(str1);
// console.log(str2);
// console.log(str1+" "+str2); // concats 2 strings

// console.log(str1.concat(' ').concat(str2)); // Another way of concatenation

// console.log(str1.length); // returns length of a string

// console.log(str1.toLowerCase()); // returns string with all character in lowercase

// console.log(str2.toUpperCase()); // returns string with all character in uppercase

// console.log(str1[1]); // returns a character from a string based on index number

// console.log(str2.substring(4,11)); // returns a substring from a whole string. Starts with start, ends with (end-1)

// console.log(str2.slice(4,11)); // works like substring

// console.log(str2.indexOf('o')); // returns index of a character of a string

// console.log(str2.lastIndexOf('o')); // returns the last index of a character

// console.log(str1.charAt(8)); // returns a character based based on index

// console.log(str1.endsWith('Zidan')); // returns true or false if the string ends with the given set of string or not
// console.log(str2.endsWith('Me')); // returns true or false if the string ends with the given set of string or not

// console.log(str1.includes('Are')); // returns true or false if the string includes the given set of string or not
// console.log(str2.includes('How')); //returns true or false if the string includes the given set of string or not

// console.log(str1.split(' ')); // returns an array containing those elements seperated by the giver character

// console.log(str1.replace('Zidan','Mehedi')); // replace a string with another string

// let html = `<h2>Hi ${str1.slice(6)}, Nice to meet ${str2.substring(8,11)} 'Buddy'.</h2>` // (``) allows ('',"") inside it. ${} is ES6 syntex that prints a variable.
// html+='Do you know Salman\'s friend?' // this foreslash(\) allows quotation inside a quotation

// //document.body.innerHTML = html; // puts any valid script inside an HTML element

//arr = str1.split('');

// for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//         document.body.innerHTML += arr[i]; //console.log(element);
//     }, 3000);
// }

//document.body.innerHTML = arr[0];
function iterateor(interval, revInterval)
{
    for (let i = 0; i < str1.length*2; i++) {
        let greet = document.getElementById('greetings');
        if(i<=10){
            setTimeout(() => {
                greet.innerHTML += str1[i];
            }, interval);
            interval+=200;
        }else if(str1.includes('H')){
            setTimeout(() => {
                greet.innerHTML = str1.slice(0,(10-i));
            }, revInterval);
            revInterval+=200;
        }
    }
}
 

function iterate(interval, revInterval){
    var count = 0;
    interval = 200;
    revInterval = 3200;
    while(count<1000){
        iterateor(interval,revInterval);
        interval = revInterval + 2600;
        revInterval = interval + 3000;
        count++;
    } 
}

iterate();



// let greet = document.getElementById('greetings');



// malikul mulki jul jalali waal ikraam