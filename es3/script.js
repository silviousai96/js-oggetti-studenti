// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente, 
//inserendo nell’ordine: nome, cognome e età.

var studenti = 
[
    {
        "nome": "Silvio",
        "cognome": "Usai",   
        "eta": 25,     
    },

    {
        "nome": "Marco",
        "cognome": "Rossi",
        "eta": 22,  
    },

    {
        "nome": "Luigi",
        "cognome": "Russo",
        "eta": 27,  
    },

];

var inputNome = prompt("Inserisci nome: ");
var inputCognome = prompt("Inserisci cognome: ");
var inputEta = parseInt(prompt("Inserisci età: "));

var nuovoStudente = {
    'nome': inputNome,
    'cognome': inputCognome,
    'eta': inputEta,
}

// console.log(nuovoStudente);

studenti.push(nuovoStudente);

console.log(studenti);
