// Creare un array di oggetti di studenti. 
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

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

for( var i = 0; i < studenti.length; i++ ) {
    var thisStudente = studenti[i];
    
    console.log("Nome: " + thisStudente.nome + " , Cognome: " + thisStudente.cognome);
    
}

