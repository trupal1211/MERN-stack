let api = 'http://www.omdbapi.com/?apikey=61e576a4&t='

let title=document.getElementById('title')

let date = document.getElementById('date')
let director = document.getElementById('director')
let actors = document.getElementById('actors')
let genre = document.getElementById('genre')
let desc = document.getElementById('desc')
let collection = document.getElementById('collection')
let awards = document.getElementById('awards')
let writer = document.getElementById('writer')

let img = document.getElementById('img')
let rating = document.getElementById('rating')

let container = document.getElementById('details-container')
container.classList.add('d-none')

let loader = document.getElementById('loader')
loader.classList.add('d-none')

function searchMovie()
{
    container.classList.add('d-none')
    loader.classList.remove('d-none')

    let movieName = document.getElementById('movieName')
    let query = api + movieName.value
     //console.log(query)
      
    fetch(query).then((data)=>{
     //console.log(data)
     return data.json()
     }).then((data)=>{
      console.log(data)  
     
    
    container.classList.remove('d-none')
    loader.classList.add('d-none')

    title.innerText = data.Title

    date.innerText=data.Released
    director.innerText=data.Director
    actors.innerText=data.Actors
    genre.innerText=data.Genre
    desc.innerText=data.Plot
    collection.innerText=data.BoxOffice
    awards.innerText=data.Awards
    writer.innerText=data.Writer

    img.src=data.Poster
    rating.innerText=data.imdbRating
    }) 

}