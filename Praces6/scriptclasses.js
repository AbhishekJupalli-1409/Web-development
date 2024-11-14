let carDisplay = document.getElementById("hi");
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "U have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const mycar = new Model("Ford", "Mustang");
let hello = mycar.show();

console.log(hello);

carDisplay.innerHTML = `Congrats, ${hello}`;





// document.getElementById('hi').innerHTML = `congrats , ${mycar.show()}`;