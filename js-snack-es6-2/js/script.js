//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà:
//nome,
//punti fatti,
//falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
//Svilupparlo in ES6.
const team = [
    {
        nome: "Juve",
        punti : 0,
        falli_subiti: 0
    }, 
    {
        nome: "Inter", 
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Milan",
        punti: 0,
        falli_subiti: 0
    }
];


for (let x = 0; x < team.length; x++){

    let randomNumber = Math.floor(Math.random()*100) + 1;
    team[x].punti = randomNumber;
    team[x].falli_subiti = randomNumber;
}
console.log(team);

const team2 = []  //cra nuovo array con la destruttturazione

for (let x = 0; x < team.length; x++){

    const{nome, falli_subiti} = team[x];
    team2[x] = {
        nome, 
        falli_subiti
    };
}

console.log(team2)