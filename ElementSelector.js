// //single element selector

// //querySelector() is used for targeting one element from multi elements

// let select = document.querySelector('.list'); //targets the first element from the element class
// console.log(select);

// select = select.childNodes[1]; //tragets the 2nd child (1st li) of the parent class (ul)
// console.log(select);

// //Multi-Selector

// select = document.getElementsByClassName('list'); //selects elements by their class name and makes a list of them
// Array.from(select).forEach((element)=>{
//     console.log(element);
//     //document.body += element;
// });

// select = select[0].childNodes; //catches the child node of first select element
// console.log(select[1]); //shows second element of the child nodes of the list


// //some CSS style has been added below

// select[1].childNodes[0].style.color = 'red'; //changes the text color of the first li link of first ul
// select[1].childNodes[0].style.border = '1px solid black'; //changes the border property of the first li link of first ul

// //end CSS

// select = document.getElementsByClassName('list');
// select = select[0].parentNode; //catches the parent nodes of the selected element

// console.log(select);

// select = document.getElementsByClassName('list');
// select = select[0].childNodes[1].childNodes[0]; //targets an element
// //select .innerText;    //used to put some text inside the selected element tags
// //select.innerHTML;     //used to put some hyperlink text inside the selected element tags
// select.innerHTML = '<b>ONE</b>' //inserts new HTML element(s)
// //console.log(select)


let div = document.querySelector('.listDiv');

div.addEventListener('click',function(event){
    div.className = 'listDiv newClass';     //here listDiv is primary class and newClass is second class
    div.addEventListener('blur',function(event){
        div.className = 'listDiv';
    });
});