//normal function 

function grinder()
{
    console.log("Grinding...")
}
grinder();

function grinder(c)
{
    console.log("Grinding...",c)
}
grinder('apple');


//function add(x,y);
//{
//    console.log(x+y);
//}

function add(x,y)
{
    let sum=x+y;
    console.log(sum);
}


function add(x,y)
{
    return x+y;
}

let sum=add(3,5);
console.log(sum)



//arrow function

cube = (x) => {
    return x*x*x;
  //console.log(x*x*x)
}


sqr = (x) => x*x;         
console.log(sqr(2));

