// fetch the data using promise and then 
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
