class Rider{
    constructor (name, number, favrider, favtrack, country, engine, frame, facebook){
        this._name = name;
        this._number = number;
        this._favrider = favrider;
        this._favtrack = favtrack;
        this._country = country;
        this._engine = engine;
        this._frame = frame;
    } 
    getDetails() {
        return `Name: ${this._name}, Number: ${this._number}, Favorite Rider: ${this._favrider}, Favorite Track: ${this._favtrack}, Country: ${this._country}, Engine: ${this._engine}, Frame: ${this._frame}`;
    }
};

const Rider1 = new Rider("Waldek Kroll",31,"Zmarzlik","Gdańsk","Poland","GM offset", "Stuha","waldek.kroll");
const Rider2 = new Rider("Robert Mechlik",43,"Gollob","Gdańsk","Poland","GM standard", "Jawa","robert.mechlik");
const Rider3 = new Rider("Łukasz Pierkoś",20,"Gollob","Gdańsk","Poland","GM standard", "Jawa");
const Rider4 = new Rider("Dariusz Dymek",175,"Gollob","Gdańsk","Poland","GM standard", "Jawa","dariusz.dymek.777");
const Trener = new Rider("Eryk Jóżwiak","","","Gdańsk","Poland","","","","eryk.jozwiak.1")
console.log(Rider1.getDetails())

let Waldekdetails = Rider1.getDetails();
document.getElementById('Waldekdetails').innerHTML = Waldekdetails;

let Robertdetails = Rider2.getDetails();
document.getElementById('Robertdetails').innerHTML = Robertdetails;

let Dariuszdetails = Rider4.getDetails();
document.getElementById('Dariuszdetails').innerHTML = Dariuszdetails;


