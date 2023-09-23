// ---------------------  1,2  ------------------------//


// Define an array 'users' containing at least 15 objects, where each object represents a user with the following properties: name, age, "gender", and 'location'.

const users = [
    {
      firstName: "Amit",
      lastName: "Kumar",
      age: 24,
      gender: "male",
      location: "Mumbai"
    },
    {
      firstName: "Priya",
      lastName: "Sharma",
      age: 16,
      gender: "female",
      location: "Delhi"
    },
    {
      firstName: "Rahul",
      lastName: "Gupta",
      age: 28,
      gender: "male",
      location: "Bangalore"
    },
    {
      firstName: "Sonia",
      lastName: "Singh",
      age: 22,
      gender: "female",
      location: "Chennai"
    },
    {
      firstName: "Raj",
      lastName: "Chatterjee",
      age: 19,
      gender: "male",
      location: "Kolkata"
    },
    {
      firstName: "Anu",
      lastName: "Patel",
      age: 16,
      gender: "female",
      location: "Hyderabad"
    },
    {
      firstName: "Vikram",
      lastName: "Sharma",
      age: 30,
      gender: "male",
      location: "Pune"
    },
    {
      firstName: "Meera",
      lastName: "Desai",
      age: 27,
      gender: "female",
      location: "Ahmedabad"
    },
    {
      firstName: "Arjun",
      lastName: "Verma",
      age: 17,
      gender: "male",
      location: "Jaipur"
    },
    {
      firstName: "Neha",
      lastName: "Yadav",
      age: 18,
      gender: "female",
      location: "Lucknow"
    },
    {
      firstName: "Alok",
      lastName: "Srivastava",
      age: 23,
      gender: "male",
      location: "Chandigarh"
    },
    {
      firstName: "Kavita",
      lastName: "Agarwal",
      age: 18,
      gender: "female",
      location: "Bhopal"
    },
    {
      firstName: "Deepak",
      lastName: "Joshi",
      age: 21,
      gender: "male",
      location: "Indore"
    },
    {
      firstName: "Pooja",
      lastName: "Malhotra",
      age: 16,
      gender: "female",
      location: "Jaipur"
    },
    {
      firstName: "Ravi",
      lastName: "Kapoor",
      age: 15,
      gender: "male",
      location: "Mysore"
    }
  ];


  // Implement a function 'isAdult' that takes a user object as input and returns 'true' if the user is 18 years or older, otherwise 'false'
  
  function isAdult(user)
  {
    if(user.age>=18)
     return 'true'
    else
     return 'false'
  }
  let check = isAdult(users[3])
  console.log(check)


  // Use the 'filter' function to create a new array adultUsers by selecting only the users who are adults using the isAdult' function.

  let adultUsers = users.filter((user)=>{
      return isAdult(user) == 'true'
  })
  console.log(adultUsers)


  // Implement a function 'getFullName' that takes a user object as input and returns the user's full name (combine 'name' and 'location' properties).

  function getFullName(user)
  {
    return  user.firstName + " "+ user.lastName + " , " + user.location
  }
  let fullName = getFullName(users[0])
  console.log(fullName)

 
  // Use the 'map' function to create a new array 'userNames' containing the full names of all users.

  let userNames = users.map((user)=>{
     return getFullName(user)
  })
  console.log(userNames)



  //--------------------------------  2  -------------------------------------//


  // Implement a function filterByGender that takes a user object as input and a gender string (e.g., "male" or "female") and returns `true` if the user's gender matches the input gender, otherwise "false".

 function filterByGender(user,gender){
     if(user.gender == gender)
      return 'true'
     else
      return 'false'
 }
 console.log(filterByGender(users[4],'female'))


 // Use chaining to manipulate the 'users' array in the following sequence:
// a. Filter and create a new array 'femaleUsers containing female users using the 'filterByGender function. 
// b. Use the 'map' function to apply the 'getFullName' function to each element of the femaleUsers array.

 let femaleUser=users.filter((user)=>{
     return filterByGender(user,'female') == 'true'
 }).map((user)=>{
   return user.firstName + " "+user.lastName
 })
 console.log(femaleUser)




 //------------------------------  3,4  --------------------------------//


 // Define an array 'movies containing at least 10 objects, where each object represents a movie with properties: 'title, genre, year, and 'rating'.

const movies = [
  {
    title: "3 Idiots",
    genre: "Comedy",
    rating: 8.4,
    year: 2009
  },
  {
    title: "Sholay",
    genre: "Action",
    rating: 8.2,
    year: 1975
  },
  {
    title: "Chennai Express",
    genre: "Action",
    rating: 6.0,
    year: 2013
  },
  {
    title: "Dhamaal",
    genre: "Comedy",
    rating: 7.3,
    year: 2007
  },
  {
    title: "Golmaal: Fun Unlimited",
    genre: "Comedy",
    rating: 7.4,
    year: 2006
  },
  {
    title: "Dabangg",
    genre: "Action",
    rating: 6.2,
    year: 2010
  },
  {
    title: "Munna Bhai M.B.B.S.",
    genre: "Comedy",
    rating: 8.1,
    year: 2003
  },
  {
    title: "Singh Is King",
    genre: "Action",
    rating: 5.7,
    year: 2008
  },
  {
    title: "Hera Pheri",
    genre: "Comedy",
    rating: 8.2,
    year: 2000
  },
  {
    title: "War",
    genre: "Action",
    rating: 6.5,
    year: 2019
  }
];


// Implement a function filterByGenre that takes a movie object as input and a genre string (e.g.. "action" or "comedy") and returns 'true' if the movie's genre matches the input genre, otherwise `false`.

function filterByGenre(movie,genre)
{
  if(movie.genre == genre)
   return 'true'
  else 
   return 'false'
}
console.log(filterByGenre(movies[8],'Comedy'))


// Use chaining to manipulate the 'movies' array in the following sequence:
// a. Filter and create a new array actionMovies containing movies with the "action" genre using the filterByGenre function. 
// b. Use the 'map' function to create a new array `movie Titles containing the titles of all movies in actionMovies.

let actionMovie = movies.filter((movie)=>{
   return filterByGenre(movie,'Action') == 'true'
})
console.log(actionMovie)


let movieTitle = actionMovie.map((movie)=>{
   return movie.title
})
console.log(movieTitle)


// ------------------------  5  ------------------------------//


//  Combine the results from Part 1 ('adultUsers and 'userNames' arrays) and Part 2 ('femaleUsers' array with full names), and Part 4 (movie Titles array) into a final object combinedResults that contains these pieces of information.

const combinedResults = {
  adultUsers,
  userNames,
  femaleUser,
  movieTitle,
};
console.log(combinedResults);