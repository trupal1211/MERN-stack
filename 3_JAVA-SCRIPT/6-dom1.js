function joined()
{
    console.log('function called');
   
    let head=document.getElementById('headline');

    head.innerText="thanks for joining";
    head.style.color="blueviolet";

    let btn=document.getElementById('btn')
    btn.style.display='none';
}

// let test=document.getElementById('test')
// console.log(test.innerText)
// console.log(test.innerHTML)







//   innerText property is used to get or set the text content of an HTML element.
//   It represents the visible text content of an element, excluding any HTML tags or elements 
//that might be nested inside the element.


//innerHTML deals with the entire HTML content, including tags, and can be used to inject new HTML content.
//innerText deals with only the visible text content of an element, excluding any HTML tags.
//When retrieving the content, innerHTML will return the HTML content as a string, including the tags, while innerText will return only the visible text content.

//If you need to manipulate or insert HTML content, use innerHTML, but be cautious about potential security risks. 
// If you only need to manipulate plain text content, use innerTex