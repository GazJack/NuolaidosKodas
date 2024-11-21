console.log('Hello from js');

// https://lt.wikipedia.org/wiki/Objektinis_programavimas

const obj = {
    name: 'Mario',
    age: 32,
    job: 'plumber'
}
 
console.log(obj);


// koda raso Aivaras
class PlayCharacter {
    constructor(name, age, job, lives = 3) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.speed = 8;
        this.strength = this.age * 2;
        this.lives = lives;
        
    }
}

// koda raso Gintare
const obj1 = new PlayCharacter('Mario', 32, 'plumber');
const obj2 = new PlayCharacter('Luigi', 30, 'plumber', 10);


console.log(obj1, obj2);

// koda raso Aivaras:

class Televizorius {
    constructor(price, owner) {
        this.brand = 'Samsung';
        this.model = 'UE55NU7172UXXH';
        this.year = 2018;
        this.price = price;
        this.owner = owner;
    }

ijungti () {
    console.log(this.owner + ' ijungia televizoriu');
}
}

// koda raso Gintare:

const tv1 = new Televizorius(400, 'Petras');
const tv2 = new Televizorius(600, 'Jonas');

console.log(tv1, tv2);

tv2.ijungti();
tv1.ijungti();