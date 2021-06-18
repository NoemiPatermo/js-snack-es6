//Snack 3
//Abbiamo sempre un array di squadre con: nome, punti fatti e falli subiti
//Stampare in html in forma tabellare i dati relativi alle squadre
//evidenziando in giallo la riga corrispondente alla squadra con più falli subiti
let fuorigioco = "";
const stampa = document.getElementById("fuorigioco");
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
let falli_presi;                // tu prendi l'oggetto
let plus_falli = 0;             //tu  il maggior numero di ammonizioni

const randomNumber = (min, max ) => Math.floor(Math.random() * (max - min)) + min;
for (let i = 0; i < team.length; i++) {                           
     team[i].punti_totalizzati = randomNumber (0, 30);
     team[i].falli_subiti = randomNumber (0, 30);
     const { falli_subiti} = team[i];
     if (falli_subiti > plus_falli ){
        falli_presi = team[i];
         plus_falli = falli_subiti           // assegno l'oggetto, alla posizione x dentro l'array

     }

}
console.log(plus_falli)
for (let i = 0; i < team.length; i++){
    if(team[i].falli_subiti < plus_falli){
        fuorigioco += "<li> SQUADRA ";
        fuorigioco += "  " + team[i].nome;
        fuorigioco += " " + team[i].punti_totalizzati;
        fuorigioco += " " + team[i].falli_subiti;
        fuorigioco += "</li>"
        
    }else{
        fuorigioco += '<li  style="background-color: yellow"> SQUADRA'
        fuorigioco += "  " + team[i].nome; +   "  ,  "
        fuorigioco += "  " +  team[i].punti_totalizzati; +  " ,  "
        fuorigioco += "  " + team[i].falli_subiti;
        fuorigioco += '</li>'
    }                                         // qui evidenzi la squadra con più falli subiti
}
console.log(fuorigioco)
stampa.innerHTML = fuorigioco