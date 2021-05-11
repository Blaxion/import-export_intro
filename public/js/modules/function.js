import {Cactus} from './class.js'; //import de la class Cactus du fichier class.js

export function sePresenter(abraham) { //export de la fonction
    abraham = new Cactus("cactus", "abaraham", 25);
    return console.log(`Je m'appel ${abraham.nom} ${abraham.prenom} et j'ai ${abraham.age} ans`);
}