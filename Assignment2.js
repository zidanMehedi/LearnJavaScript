//write a JS code which will return all those links of a page that contains 'monitor'.

let links = document.links; 

Array.from(links).forEach((element)=>{
    if(element.href.toString().includes('monitor'))
    {
        console.log(element.href);
    }
});