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




--------------------------------------------------------------------------------


// Create a function named getData
// This function will fetch user data from an API
function getData()
{
  // Print "Loading..." while we are waiting for the API response
  console.log("Loading...");

  // fetch() sends a request to the given API URL
  // fetch() returns a Promise because the response comes asynchronously
  fetch("https://jsonplaceholder.typicode.com/users")

    // .then() runs when the fetch request is successful
    // 'res' contains the response received from the server
    .then((res) => res.json())

    // res.json() also returns a Promise
    // This .then() runs when the response is converted into JSON
    // 'data' contains the actual user data
    .then((data) =>
      {
        // forEach() goes through each user in the data array
        data.forEach((user) =>
          {
            // Print the name of each user
            // user.name accesses the 'name' property of the current user
            console.log(user.name);
          });
      })

    // .catch() handles any error that happens in the Promise chain
    .catch((error) =>
      {
        // error.message gives us a readable description of the error
        console.log("Error " + error.message);
      });
}

// Call/invoke the getData() function
getData();


----------------------------------------------------

  // async tells JavaScript that this function will work with Promises
// An async function always returns a Promise
async function getData()
{
  // Print Loading... before starting the API request
  console.log("Loading...");

  // try contains the code that might produce an error
  // If an error occurs inside try, JavaScript moves to catch
  try
  {
    // fetch() sends a request to the API
    // await pauses this function until fetch() finishes
    // 'res' stores the response returned by fetch()
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // res.json() converts the response body into JavaScript data
    // await waits until JSON conversion is completed
    // 'data' contains the array of users
    const data = await res.json();

    // forEach() loops through every user in the data array
    data.forEach((user) =>
      {
        // Print the name of each user
        // user.name accesses the name property
        console.log("user name" + " " + user.name);
      });
  }

  // catch handles errors that occur inside the try block
  catch(error)
    {
      // Print the error message
      console.log("Error " + error.message);
    }
}

// Call/invoke the getData() function
getData();
