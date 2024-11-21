console.clear();

class TV {

            static programos = ['TV3', 'LRT', 'TV6', 'TV1', 'Animal planet'];

            static pridetiPrograma(programa) {
                this.programos.push(programa);
            }

    constructor(savininkas) {
        this.savininkas = savininkas;
        this.kanalas = 1;
        this.ijungta = false;
    }
 
    pakeistiKanala(kanalas) {
        if (this.ijungta) {
            this.kanalas = kanalas;
        }
    }
 
    ijungti() {
        this.ijungta = true;
    }
 
    isjungti() {
        this.ijungta = false;
    }
 
    info() {
        console.log('Savininkas: ' + this.savininkas + ', kanalas: ' + this.constructor.programos[this.kanalas - 1]);
    }
}
 
const tv1 = new TV('Petras');
const tv2 = new TV('Maryte');
const tv3 = new TV('Bebras');

const naujosProgramos = ['TV3', 'LRT', 'TV6', 'TV1', 'Discovery'];

TV.programos = naujosProgramos;

TV.pridetiPrograma('Child TV');

// tv1.programos = naujosProgramos;
// tv2.programos = naujosProgramos;
// tv3.programos = naujosProgramos;

tv1.ijungti();
tv1.pakeistiKanala(6);
tv1.info();

tv2.ijungti();
tv2.pakeistiKanala(1);
tv2.info();

tv3.ijungti();
tv3.pakeistiKanala(5);
tv3.info();

const tv4 = new TV('Jonas');

// tv4.programos = naujosProgramos;

tv4.ijungti();
tv4.pakeistiKanala(4);
tv4.info();