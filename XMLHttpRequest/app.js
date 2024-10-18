

const req = new XMLHttpRequest();

req.onload = function () {  // whhen there is no error
    console.log("loaded");
    console.log(this);
    const data = JSON.parse(this.responseText);
    console.log(data);
    document.write(data.name);

}

req.onerror = function () { //when there is some error
    console.log("ohno eroor");
    console.log(this);
    
    
}


req.open("GET", "https://swapi.dev/api/people/1");
req.send();


