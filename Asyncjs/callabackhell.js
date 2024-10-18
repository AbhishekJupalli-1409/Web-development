setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "orange";
    setTimeout(() => {
        document.body.style.backgroundColor = "yellow";
        setTimeout(() => {
            document.body.style.backgroundColor = "green";
            setTimeout(() => {
              document.body.style.backgroundColor = "blue";
            }, 1000);
        }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


const delayColorchange = (newcolor, delay,doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newcolor;
        doNext && doNext();
    }, delay);
   
}

delayColorchange('red', 1000, ()=>{
    delayColorchange("orange", 1000, () => {
        delayColorchange("yellow", 1000, () => {
            delayColorchange("blue", 1000, () => {
                delayColorchange("green", 1000, () => {});

            });
        });
    })
});

//MOSTLYCALLBACKS ARE USING IN ASYNC API CALLING


// searchMovieApi('spiderman'() => {
//     saveTODb(movie,(success)=> {
//         SUCESS GOT DATA
// }, (Failure) => {
//         UNABLE TO GET DATA
//     })
    
// }, () => {
//     //API DOWN REQUST FAILED
// })