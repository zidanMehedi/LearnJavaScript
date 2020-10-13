let head = document.createElement('h1');        //creating a header element
head.style.marginLeft = '50px';     //giving some padding
head.id = 'head';       //assigning an id


/* 
    giving some conditions. if the local storage of the browser has any item named 'content',
    then the newly created header will contain the value of 'content' as it's innerHTML.
    If there nothing like 'content' in local storage, the header will set 'Hello Boy' as it's
    innerHTML
*/

if (localStorage.getItem('content') == null) {
    head.innerHTML = 'Hello Boy';
} else {
    head.innerHTML = localStorage.getItem('content');
}

//condition ends here...




document.body.insertBefore(head, document.getElementById('listDiv'));        /*inserting the newly
                                                                                created header before
                                                                                the 'listDiv' element*/

let div = document.createElement('div');        //creating a new div
let tbox = document.createElement('input');     //creating a new input field


//giving some style in the newly created input field

tbox.setAttribute('type','text');       //setiing the new input field type as textbox
tbox.style.border = '1px solid Green';
tbox.style.paddingLeft = '15px';
tbox.style.paddingRight = '15px';
tbox.style.marginLeft = '50px'
tbox.style.height = '35px';
tbox.style.width = '250px';
tbox.style.borderRadius = '5px';
tbox.placeholder = 'Please Write Something...';

//styling ends here....

div.appendChild(tbox);      //inserting the new input field inside new div

var content;        //creating a new variable for future use


//creating a click event for the new header...

head.addEventListener('click', (e) => {

    /*  giving some conditions. if the local storage of the browser has any item named 'content',
        then the new input field will contain the value of 'content' as it's own value.
        If there nothing like 'content' in local storage, the new input will set 'Hello Boy' as it's
        own value
    */

    if (localStorage.getItem('content') == null) {
        tbox.value = head.innerHTML;
    } else {
        tbox.value = localStorage.getItem('content');
    }

    //condition ends here.....


    head.replaceWith(div);      //replacing the new header by new div


    /*
        creating an event for the input text field. The blur event will help to effect on the DOM if
        the mouse if clicked outside it's holder. Here by the holder I meant the new textbox itself...
    */

    tbox.addEventListener('blur', () => {

    /*  giving some conditions. if the textbox contains empty value, the 'content' variable will 
        be assigned with 'Hello Boy'. Otherwise, the 'content' variable will be assigned with the 
        textbox value.
    */

        if (tbox.value == '') {
            content = 'Hello Boy';
        } else {
            content = tbox.value;
        }

        //condition ends here.....


        localStorage.setItem('content', content);       /* setting an item named 'content' assigned with
                                                         cotent variable inside local storage*/
        
        head.innerHTML = localStorage.getItem('content');       /*head innerHTML is assigned with the 
                                                                local storage item value named 'content'*/
        
        div.replaceWith(head);      //replcating div by header
    })

});