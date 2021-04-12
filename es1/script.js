// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. 
//Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
    "nome": "Silvio",
    "cognome": "Usai",
    "eta": 25,
};

for (var key in studente) {
    console.log(studente[key]);
    }
