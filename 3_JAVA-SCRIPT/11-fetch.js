fetchQuote()

function fetchQuote()
{
    
    let randomIndex=Math.floor(Math.random()*16)
    fetch("https://type.fit/api/quotes").then((data)=>{
        //console.log(data))
        return data.json()
        }).then((quotes)=>{
            document.getElementById('quote').innerText=quotes[randomIndex].text
            document.getElementById('author').innerText=quotes[randomIndex].author
        })   
}
