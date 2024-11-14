let bye = document.getElementById('hi');
bye.innerHTML = "Congrats";

let carName = document.getElementById('Carom');

const userName = prompt("Please enter car name");

class Car {
  constructor(name) {
    this.brand = name;
    }
    show() {
        showCartext(this.brand)
        
    }
}

const mycar = new Car(userName);
mycar.show();

function showCartext(hithis){
  carName.innerHTML = `You have, bought  ${hithis} brand car !`;
}