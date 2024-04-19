// alert("Salut JS");

/* Commenter
plusieurs
lignes */

// Kamel Case
let maSuperVariable = "Hello";

// ** Les variables **

// var = vieux JS
var unTexte = "voici un texte";

// const = constante
const prenom = "justine";

// let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "je suis une chaine de caractère ! ";

let nouvelleChaine =
  "Chaine précédente : " + chaine + "Voila c'était le contenu ";

// concaténation avec guillements altgr+7
let unConcatenation = `Chaine précédente : ${chaine} Voila c'était le contenu`;

console.log();

// ** Types de données **

let string = "je suis une chaine de caractère";
let number = 27;
let boolean = false;

// Tableau : il y a des crochets []
let array = ["je ", "suis", 47, true];

// objet : c'est des accolades {}
let objet = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

let arbre;
//... quelque ligne de code plus tard
arbre = "sapin";

console.log();

// ** Les opérateurs **

// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);

// // puissance
// console.log(4 ** 5);

// ** Opérateurs d'affectations **

let total = 2;

// ca se fait mais pas la bonne pratique
// total = total + 1;

// total++;

// je veux que tu me rajoute 5
total += 5;

//  je veux que tu m'enleves 4
total -= 4;

//  A NE PAS FAIRE
// // total = total * 2;

total *= 2;

console.log();

// ** Opérateurs d'affectations **

// une boite qui s'appelle x et que je donne comme valeurs 2
let x = 2;
// une boite qui s'appelle y et que je donne comme valeurs 5
let y = 5;

// je dis que si (if) x est plus grand que y console.log(yes) sinon (else) console.log(faux)
if (x > y) {
  console.log();
} else {
  console.log();
} // else {
//   console.log("ils sont egaux !");
// }

// on test si la valiable est true
if (x) {
  console.log();
}

// === test l'égalité en type et contenu
if (x === y) {
  console.log();
} else {
  console.log();
}

// == test l'égalité de valeur sans prendre en compte le type"
if (x == y) {
  console.log();
} else {
  console.log();
}

// || ou
// && et

// si x est inférieur a y ou x est supérieur a 10 alors console.log(oui)
// petit remarqque je compare 2 condition ce dernier est verifier si l'une ou l'autre condition est vraie
// si je souhaite que ma condition soit fausse je dois changer la valeur de x ( exemple 7 )
if (x < y || x > 10) {
  console.log();
} else {
  console.log();
}

// && il faut que toutes les conditions soit réunies
if (x < y && x > 10) {
  console.log();
} else {
  console.log();
}

// a retenir la principale différence est que l'opérateur && exige que toutes les conditions soient vraies pour que l'ensemble de la condition soit vrai,
//tandis que l'opérateur || exige seulement qu'une des conditions soit vraie pour que l'ensemble de la condition soit vrai.

// ** Les fonctions **

// function classique (à l'ancienne)
// Une function c'est un algorthime a faire quelque chose exemple ci-dessous ( on automatise des choses a executer)
// une algorthyme c'est comme une recette de cuisine suivre des etapes 1 , 2 , 3 etc
function faireQuelquesChose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  console.log("calcule terminé");
  return; // un reurn permet d'arreter une function  ou retounrer une valeurs
}

// j'appelle ma function
faireQuelquesChose();

// function fléchée
// j'introduis dans mon variable une function
// les parametres sont la porte d'entrée on lui rentre des données et de les tuiliser a l'intérieur de la fonction
const addition = (a, b) => {
  console.log(a + b);
};

// entre chaque paramtre mettre une virgule
addition(4, 3);

// ** La portée des variables **

// dans ce cas je peux appeler la variable car ma variable et en dehors de ma function je n'aurait pas pu si elle etait a l'interieur
let num = 4;
function add2() {
  console.log(num + 2);
}
console.log(num);
add2();
