let list = document.querySelector('.list');     //targets a single element (the 1st one) of list class




let ele = document.createElement('li');     //creating a DOM element. (list element)

ele.className = 'Six';      //giving a class and class name inside the element

ele.id = 'six';     //giving an id and id name inside the element

ele.setAttribute('title','This is Six');        //setting any single attribute inside the element

let link = document.createElement('a');     //creating a DOM element. (anchor element)

link.href = '#Six';     //giving link to the anchor tag

//link.setAttribute('href','#Six');     //another way of giving link to the anchor tag

link.innerHTML = 'Six'

ele.appendChild(link);      //inserting the anchor tag element inside list tag element

list.appendChild(ele);      //inserting the list tag element inside the list variable

console.log(ele);




let div1 = document.createElement('div');        //creates a div element

let tbox = document.createElement('input')      //creates an input element

tbox.type = 'text';     //sets type of input element

//tbox.setAttribute('type','text');     //another way of setting type of input

tbox.placeholder = 'This is a Textbox';     //setting placeholder

tbox.name = 'tbox';     //setting name of input type

div1.appendChild(tbox);      //appending input element inside div element

console.log(div1);

document.body.appendChild(div1); //appending div element inside body element




let text = document.createTextNode('I am a nerd');      //creates a text node

console.log(text);




let div2 = document.createElement('div');        //creates a div element

let Tbox = document.createElement('input')      //creates an input element

Tbox.type = 'text';     //sets type of input element

//tbox.setAttribute('type','text');     //another way of setting type of input

Tbox.placeholder = text.nodeValue;     //setting placeholder, nodeValue extracts the value of any node

Tbox.name = 'Tbox';     //setting name of input type

div2.appendChild(Tbox);      //appending input element inside div element

console.log(div2);

div1.replaceWith(div2);     //replacing div1 by div2




let Ele = document.createElement('li');     //creating a DOM element. (list element)

Ele.className = 'Seven';      //giving a class and class name inside the element

Ele.id = 'Seven';     //giving an id and id name inside the element

Ele.setAttribute('title','This is Seven');        //setting any single attribute inside the element

let Link = document.createElement('a');     //creating a DOM element. (anchor element)

Link.href = '#Seven';     //giving link to the anchor tag

//Link.setAttribute('href','#Seven');     //another way of giving link to the anchor tag

Link.innerHTML = 'Seven'

Ele.appendChild(Link);      //inserting the anchor tag element inside list tag element

list.replaceChild(Ele,ele);     //replaces child of variable list ele by Ele




console.log(Ele.hasAttribute('title'));     //shows True or False is the element has the given attribute or not

console.log(Ele.hasAttribute('alt'));       //shows True or False is the element has the given attribute or not

console.log(Ele);




Ele.removeAttribute('title');       //removes attributes from an element

list.removeChild(Ele);      //removes any child from a parent element





