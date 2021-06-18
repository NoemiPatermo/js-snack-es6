//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. 
//Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6. 

var biciArray = [
    {
        nome: "Bianchi",        
        peso : 50
    }, 
    {
        nome: "Rossi", 
        peso: 20
    },
    {
        nome: "Verdi",
        peso: 10
    }
];

 //stampa la bici più leggera 
 //crea variabii ancore

var ultimaBiciPesoMinore;  // qui metterò l'oggetto bici
var ultimaBici =  100; // qui metterò solo il peso della bici più leggera mai visto

for (var x = 0; x < biciArray.length; x++) {

    var thisBike = biciArray[x].peso;

    if (thisBike < ultimaBici) {
        ultimaBiciPesoMinore = biciArray[x];
        ultimaBici = thisBike;
    }
    
}
console.log("La bici più leggera è quella di nome Verdi: " + ultimaBici); 
/*
var biciArray = [
    {
        nome: "Bianchi",
        peso : 50
    }, 
    {
        nome: "Rossi", 
        peso: 20
    },
    {
        nome: "Verdi",
        peso: 10
    }
];

let ultimaBici;  
let lastBici = 100; 


for (let x = 0; x < biciArray.length; x++) {

    const { peso } = biciArray[x];
    
    if (peso < lastBici) {
        ultimaBici = biciArray[x];
        lastBici = peso;
    }
    
}

const { nome, peso } = ultimaBici;

console.log(`La bici più leggera è: ${nome} con peso  ${peso}`) */