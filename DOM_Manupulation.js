let lists = document.getElementsByClassName('list'); //catches the element(s) by their class name
Array.from(lists).forEach(function(element){    //converts DOM elements into an array
    //console.log(element);     //shows all elemnts from the array
});

let links = document.links;
Array.from(links).forEach((element)=>{      //converts DOM elements into an array
    console.log(element);       //shows all elemnts from the array
});   