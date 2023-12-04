alert("Welcome!\nHere you can see, in real-time, the equivalent amount from euros to Bitcoin!");
let btc;
document.addEventListener('DOMContentLoaded', function () {
    const euroLabelInput = document.getElementById('euroLabel');
    euroLabelInput.value = '0€';
    // Funzione per ottenere il prezzo del Bitcoin e aggiornare il valore nel paragrafo
    function getBitcoinPrice() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur')
            .then(response => response.json())
            .then(data => {
                // Aggiorna il prezzo nel documento
                const bitcoinValueParagraph = document.getElementById('bitcoinValue');
                btc = data.bitcoin.eur;
                bitcoinValueParagraph.textContent = 'Bitcoin Value: €' + data.bitcoin.eur;
            })
            .catch(error => console.error('Errore nella richiesta API:', error));
    }

    // Chiama la funzione ogni 60 secondi (o il tuo intervallo preferito)
    setInterval(getBitcoinPrice, 60000);

    // Chiamare la funzione all'inizio per ottenere il prezzo iniziale
    getBitcoinPrice();
});

let count = 0;

document.getElementById("decrease").onclick = function () {
    count -= 1;
    if (count < 0) {
        alert("L'importo in euro non può essere minore di 0");
        count = 0; // Imposta il contatore a 0 in caso di valore negativo
    }
    updateLabels();
}
document.getElementById("decrease50").onclick = function () {
    count -= 50;
    if (count < 0) {
        alert("L'importo in euro non può essere minore di 0");
        count += 50; // Imposta il contatore a 0 in caso di valore negativo
    } else{
    updateLabels();
    }
}
document.getElementById("decrease100").onclick = function () {
    count -= 100;
    if (count < 0) {
        alert("L'importo in euro non può essere minore di 0");
        count += 100; // Imposta il contatore a 0 in caso di valore negativo
    }
    updateLabels();
}
document.getElementById("decrease200").onclick = function () {
    count -= 200;
    if (count < 0) {
        alert("L'importo in euro non può essere minore di 0");
        count += 200; // Imposta il contatore a 0 in caso di valore negativo
    }
    updateLabels();
}

document.getElementById("reset").onclick = function () {
    count = 0;
    updateLabels();
}

document.getElementById("increase").onclick = function () {
    count += 1;
    updateLabels();
}
document.getElementById("increase50").onclick = function () {
    count += 50;
    updateLabels();
}
document.getElementById("increase100").onclick = function () {
    count += 100;
    updateLabels();
}
document.getElementById("increase200").onclick = function () {
    count += 200;
    updateLabels();
}



// Funzione per aggiornare le etichette Euro e Bitcoin
function updateLabels() {
    const euroLabel = document.getElementById("euroLabel");
    const countLabel = document.getElementById("countLabel");
    
    // Aggiorna l'etichetta Euro
    euroLabel.innerHTML = count + " €";

    // Calcola il corrispettivo in Bitcoin
    const bitcoinEquivalent = count / btc;

    // Aggiorna l'etichetta Bitcoin
    countLabel.innerHTML = bitcoinEquivalent.toFixed(5) + " ₿";
}

// Chiama la funzione all'inizio per ottenere il prezzo iniziale
getBitcoinPrice();