//Write down a code that returns all images of a page

let imgs = document.images;        //catches all images of a page
Array.from(imgs).forEach((element)=>{
    console.log(element);
});                                 //prints all the image elements

Array.from(imgs).forEach((element)=>{
    console.log(element.src);       //prints all the image src links
}); 

Array.from(imgs).forEach((element)=>{
    console.log(element.alt);       //prints all the image alter descriptions
});


//Write down a code that returns all scripts of a page

let scrp = document.scripts;       //catches all scripts of a page
Array.from(scrp).forEach((element)=>{
    console.log(element);            //prints all the script elements
}); 