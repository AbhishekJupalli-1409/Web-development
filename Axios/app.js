// axios.get('https://swapi.dev/api/people/1')
//     .then((res) => {
//     console.log("Response: ",res)
//     })
//     .catch((e) => {
//         console.log("Ohno error", e);
//     })
//Axios directly return the data object unless fetch in which we have to convert Response stream to json using res.json().



//NOw lets use the axios using the async and await keyword]



// const GetstarwarsPeople = async (id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//         console.log(res)
//         console.log(res.data)
//     }
//     catch (e) {
//         console.log("oh no error", e);
//     }
// }


// GetstarwarsPeople(4);


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const Newdadjoke = async () => {
    try{
    const addJokeText = await Dadjoke();
    const newLi = document.createElement('LI');
    newLi.append(addJokeText);
        jokes.append(newLi);
    }
    catch (e) {
        console.log('Ohno error in Newdadjoke func', e);
    }
}

const Dadjoke = async () => {
    try{
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get("https://icanhazdadjoke.om",config);
    console.log(res.data.joke);
    return res.data.joke;
    }
    catch (e) {
       return 'N Jokes Available Sorry :('
    }
}


button.addEventListener('click',Newdadjoke );