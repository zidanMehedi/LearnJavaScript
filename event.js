let target = document.getElementsByClassName('list')[0];

//console.log(target.children);

Array.from(target.children).forEach((element)=>{
    element.children[0].addEventListener('mouseover',(e)=>{     //creating an event on targated element
        e.preventDefault();
        element.children[0].style.color = 'Green';
        element.children[0].style.paddingBottom = '5px';
        element.children[0].style.fontSize = '17px';
        element.children[0].style.borderBottom = '2px solid Green';
        element.children[0].style.transition = '0.2s';
    });
    element.children[0].addEventListener('mouseleave',(e)=>{        //creating an event on targated element
        element.children[0].style.color = 'blue';
        element.children[0].style.border = 'none';
        element.children[0].style.fontSize = '16px';
    });
});

target = document.getElementsByClassName('list')[1];
//console.log(target);
Array.from(target.children).forEach((element)=>{
    element.addEventListener('mouseover',(e)=>{     //creating an event on targated element
        console.log(e.target);
        console.log(e.offsetX);
        console.log(e.offsetY);
        console.log(e.clientX);
        console.log(e.clientY);

        //offsetX gives element relative x position
        //offsetY gives element relative y position
        //clientX gives element browser wise element x position
        //clientY gives element browser wise element y position
    });
});

document.getElementById('div').addEventListener('click',(e)=>{
    console.log(e.target);      //shows the targated element
    console.log(e.target.id);       //shows the targated element id
    console.log(e.target.className);        //shows the class name(s) as a string
    console.log(e.target.classList);        //shoes the class name(s) as an array
});


/*----------Practice----------*/

document.body.addEventListener('mousemove',(e)=>{
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.clientY})`;
});