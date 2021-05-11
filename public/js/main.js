import {sePresenter} from './modules/function.js'; //import sePresenter du fichiers fonction.js

import * as monModule from './modules/variable.js'; //import de toute les variables posé dans l'export du fichier fonction.js, as monModule permet de donné un nom d'emprunt

sePresenter();

console.log(monModule.anthony); //utilisation de la variable importé avec un *, utilisation du nomDemprunt.variable