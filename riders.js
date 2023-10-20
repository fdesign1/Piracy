class Rider{
    constructor (name, number, favrider, favtrack, country, engine, frame, facebook){
        this._name = name;
        this._number = number;
        this._favrider = favrider;
        this._favtrack = favtrack;
        this._country = country;
        this._engine = engine;
        this._frame = frame;
        this._facebook = facebook;
        this._birthdate = birthdate;
        
    } 
    getDetails() {
        return `Name: ${this._name}, Number: ${this._number}, Favorite Rider: ${this._favrider}, Favorite Track: ${this._favtrack}, Country: ${this._country}, Engine: ${this._engine}, Frame: ${this._frame}`;
    }
    getName(){
        return this._name;
    }
};


const Rider1 = new Rider("Waldek Kroll",31,"Zmarzlik","Gdańsk","Poland","GM offset", "Stuha","waldek.kroll");
const Rider2 = new Rider("Robert Mechlik",43,"Gollob","Gdańsk","Poland","GM standard", "Jawa","robert.mechlik", "19.19.1990");
const Rider3 = new Rider("Łukasz Pierkoś",20,"Gollob","Gdańsk","Poland","GM standard", "Jawa");
const Rider4 = new Rider("Dariusz Dymek",175,"Gollob","Gdańsk","Poland","GM standard", "Jawa","dariusz.dymek.777","01.01.1975");
const Rider5 = new Rider("Wojciech Stachacz",15,"Gollob","Gdańsk","Poland","GM standard", "Jawa","dariusz.dymek.777");
const Rider6 = new Rider("Dawid Dymek",175,"Gollob","Gdańsk","Poland","GM standard", "Jawa","dariusz.dymek.777");
const Trener = new Rider("Eryk Jóżwiak","","","Gdańsk","Poland","","","","eryk.jozwiak.1")
console.log(Rider1.getDetails())
console.log(Rider1.getName())


let Waldekdetails = Rider1.getDetails();
document.getElementById('Waldekdetails').innerHTML = Waldekdetails;

let Waldekname = Rider1.getName();
document.getElementById('Waldekname').innerHTML = Waldekname;

let Robertdetails = Rider2.getDetails();
document.getElementById('Robertdetails').innerHTML = Robertdetails;

let Lukaszdetails = Rider3.getDetails();
document.getElementById('Lukaszdetails').innerHTML = Lukaszdetails;

let Dariuszdetails = Rider4.getDetails();
document.getElementById('Dariuszdetails').innerHTML = Dariuszdetails;
Rider4.getName();
document.getElementById('Dariuszname').innerHTML = Dariuszname;

let Wojciechdetails = Rider5.getDetails();
document.getElementById('Wojciechdetails').innerHTML = Wojciechdetails;

let Dawiddetails = Rider6.getDetails();
document.getElementById('Dawiddetails').innerHTML = Dawiddetails;



