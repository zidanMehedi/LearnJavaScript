let ele = document.querySelector('.list');

console.log(ele.children); //children only targets html tag elements
console.log(ele.children[0]);
console.log(ele.children[1]);

Array.from(ele.children).forEach((element)=>{
    console.log(element);
});

console.log(ele.childNodes[1].nodeName); //shows targated childNode tag name
console.log(ele.childNodes[1].nodeType); //returns targated node type

//Node Types

// 1 for element
// 2 for attribute
// 3 for text node
// 8 for comment
// 9 for document
// 10 for docType

console.log(ele.firstChild);    //returns first child of the element
console.log(ele.firstElementChild);     //returns first element child of the element

console.log(ele.lastChild);     //returns last child of the element
console.log(ele.lastElementChild);      //returns last element child of the element

console.log(ele.firstChild.nextSibling);    //rerurns next child
console.log(ele.firstElementChild.nextSibling);     //rerurns next child element