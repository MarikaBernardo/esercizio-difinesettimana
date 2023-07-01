// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const users = [];
users.push(marco);
users.push(paul);
users.push(amy);

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  if (user.isAmbassador) {
    console.log(user.name + " " + user.lastName + " è un ambassador.");
  } else {
    console.log(user.name + " " + user.lastName + " non è un ambassador.");
  }
}

const ambassadors = [];
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  if (user.isAmbassador) {
    ambassadors.push(user);
    console.log(user.name +" " + user.lastName);
   
  }
}




const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy;

let totalCost = 0;

if (!utenteCheEffettuaLAcquisto.isAmbassador) {
  for (let i = 0; i < prices.length; i++) {
    totalCost += prices[i];
  }
}


if (utenteCheEffettuaLAcquisto.isAmbassador) {
  for (let i = 0; i < prices.length; i++) {
    const discountedPrice = prices[i] * 0.7;
    totalCost += discountedPrice;
  }
}

if (totalCost <= 100) {
  totalCost += shippingCost;
}

console.log("Il costo totale del carrello è: " + totalCost);
