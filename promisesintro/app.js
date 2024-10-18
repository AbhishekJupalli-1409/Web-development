const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;  //create a random number between 500 to 5000
  setTimeout(() => {
    if (delay > 4000) {  //greater than 4000 request failed error message
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;

    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};




// fakeRequestCallback(
//   "books.com/page1",
//   (res) => {
//       console.log("It worked");
//       console.log(res);
//       fakeRequestCallback(
//         "books.com/page2",
//         (res) => {
//           console.log("It worked again!!");
//           console.log(res);
//         },
//         (err) => {
//           console.log("Error", err);
//         }
//       );
      
//   },
//   (err) => {
//     console.log("Error",err);
//   }
// );



// const request = fakeRequestPromise('yelp.com/api/coffee/page1');
// request
//     .then(() => {
//         console.log('it worked');
//         console.log('promise resolved page 1');


//         const request = fakeRequestPromise("yelp.com/api/coffee/page2");
//         request
//           .then(() => {
//             console.log("it worked");
//             console.log("promise resolved page 2");
//           })
//           .catch(() => {
//             console.log("oh no error");
//             console.log("promise rejected page 2");
//           });

    
//     })
//     .catch(() => {
//         console.log('oh no error');
//         console.log("promise rejected page 1");
// })




//OR U CAN CHAIN IT LIKE THIS WITHOUT USING VARIABLES


// EVEN THE BELOW PROCESS IS SIMILAR TO CLL BACK SO WE ARE GONNA DO SOMETHING

//REQUEST FOR PAGE 1

//  fakeRequestPromise("yelp.com/api/coffee/page1")

//   .then(() => {
//     console.log("it worked");
//       console.log("promise resolved page 1");
      
// // REQUEST FOR PAGE 2
//      fakeRequestPromise("yelp.com/api/coffee/page2")
   
//       .then(() => {
//         console.log("it worked");
//         console.log("promise resolved page 2");
//       })
//       .catch(() => {
//         console.log("oh no error");
//         console.log("promise rejected page 2");
//       });
//   })
//   .catch(() => {
//     console.log("oh no error");
//     console.log("promise rejected page 1");
//   });





// NOW WE ARE GONNA RETURN THAT SECOND REQUEST AND THEN CHAIN IT WITH THEN . THEN WE CAN AVOID CALL BACK
//AND NOW WE CAN USE A SINGLE .CATCH FOR ALL OF THE .THENS

 fakeRequestPromise("yelp.com/api/coffee/page1")
   .then((data) => {
     console.log("it worked",data);
     console.log("promise resolved page 1");

     return fakeRequestPromise("yelp.com/api/coffee/page2");
   })
   .then((data) => {
     console.log("it worked",data);
     console.log("promise resolved page 2");
     return fakeRequestPromise("yelp.com/api/coffee/page3");
   })
   .then((data) => {
     console.log("it worked",data);
     console.log("promise resolved page 3");
     
   })

     .catch((err) => {
         console.log('oh no error occured');
         console.log(err)
   })





//THE ABOVE WHOLE PROCESS IS SIMILAR TO MAP IN ARRAY
Array = [1, 2, 3, 4, 5];
Array.map(function (element) {
  console.log(element);
});

//THE ABOVE WHOLE PROCESS IS SIMILAR TO MAP IN Objects too
const myArray = {
  1: "abhi",
  2: "prav",
  3: "navigator"
};
Object.values(myArray).map(function (element) {
  console.log(element);
});
