//Snack 3
//Abbiamo sempre un array di squadre con: nome, punti fatti e falli subiti
//Stampare in html in forma tabellare i dati relativi alle squadre
//evidenziando in giallo la riga corrispondente alla squadra con più falli subiti

let fuorigioco = "";
const visualizzaVideo = document.getElementById("fuorigioco");
const team = [
    {
        nome: "Juve",
        punti_totalizzati : 0,
        falli_subiti: 0
    }, 
    {
        nome: "Inter", 
        punti_totalizzati: 0,
        falli_subiti: 0
    },
    {
        nome: "Milan",
        punti_totalizzati: 0,
        falli_subiti: 0
    }
];
//creo variabile ancora esterna 
let falli_presi;              // qui metto l'oggetto squadra
let plus_falli = 0;             //qui metto il maggior numero di ammonizioni

//arrow function per generare numero random
const randomNumber = (min, max ) => Math.floor(Math.random() * (max - min)) + min;

for (let i = 0; i < team.length; i++) {                           
     team[i].punti_totalizzati = randomNumber (0, 30);
     team[i].falli_subiti = randomNumber (0, 30);
     const { falli_subiti} = team[i]; //destrutturazione, prendo la proprietà del mio oggetto indicando il nome dell'array da cui prendere i valori
     if (falli_subiti > plus_falli ){   //se la var randomizzata sarà > di plus-falli che non è più zero
        falli_presi = team[i];   //allora assegno la var  che conteneva l'oggetto squadra all'indice della squadra  
         plus_falli = falli_subiti    // qui assegno il maggior numero di ammonizioni , alla posizione x dentro l'array

     }

}
console.log(plus_falli)
//stampa la lista, dove indichi nel caso dritto se la variabile falli-subiti è minore della variabile in cui hai salvato il maggior numero di ammonizioni
for (let i = 0; i < team.length; i++){
    if(team[i].falli_subiti < plus_falli){
        fuorigioco += "<li> SQUADRA :  ";
        fuorigioco += "  " + team[i].nome;
        fuorigioco += " " + team[i].punti_totalizzati;
        fuorigioco += " " + team[i].falli_subiti;
        fuorigioco += "</li>"
        
    }else{   // e nell'else indichi evidenziando la squadra che ne ha subiti di più
        fuorigioco += '<li  style="background-color: yellow"> SQUADRA :'
        fuorigioco += "  " + team[i].nome; +   "  ,  "
        fuorigioco += "  " +  team[i].punti_totalizzati; +  " ,  "
        fuorigioco += "  " + team[i].falli_subiti;
        fuorigioco += '</li>'
    }                                       
}
console.log(fuorigioco)
visualizzaVideo.innerHTML = fuorigioco