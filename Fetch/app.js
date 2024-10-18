// const hello = () => {
//   fetch("https://swapi.dev/api/people/6")
//   .then(res => {
//     console.log("found data", res); // doesnt have all the data we need so we use res.json() to get required readable stream
//     //res.json()==>returns a promise is not like the JSON.parse
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/1");
//   })

//   //IN THIS CASE OUR CODE IS VERY MUCH FLAT SO WE DONT GET CALL BACK HELL
//   .then((res) => {
//     console.log("second Request");
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(e => {
//     console.log("ohno error", e);
//   });

// }
// hello();
 

//THE ABOVE METHOD IS DONE IN TIMELY USING CHAINING BELOW IS ALSO DONE BY USING ASYNC AND AWAIT



const LoadStarwarsPeople = async () => {
  try {
  const res = await fetch("https://swapi.dev/api/people/1")
  console.log(res)
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2")
  const data2 = await res2.json()
    console.log(data2);
  }
  catch (e) {
    console.log('ohno error', e);
  }


}
  

LoadStarwarsPeople();