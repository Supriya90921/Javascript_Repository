// fetch the data using promise and then 

function getData()
{
  console.log("Loading...");

  fetch ("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>
      {
        data.forEach((user)=>{
          console.log(user.name);
        });
      })
          .catch((error)=>
          {
            console.log("Error " + error.message);
  });
}
getData();


//Same function using async await keywords

async function getData()
{
  console.log("Loading...");
try
{
  
  const res=await fetch ("https://jsonplaceholder.typicode.com/users");
  const data=await res.json();

  data.forEach((user) =>
    {
      console.log("user name" + " "+ user.name);
    });
}

  catch(error)
    {
      console.log("Error " + error.message);
    };
}
getData();
