// Eenvoudige functie om twee getallen op te tellen
function add(a, b) {
    return a + b;
}

// Een simpele test voor de add-functie
function testAdd() {
    const result = add(2, 3);
    const expected = 5;
    
    if (result === expected) {
        console.log('Test geslaagd!');
    } else {
        console.error(`Test mislukt: Verwacht ${expected}, maar kreeg ${result}`);
    }
}

// Voer de test uit
testAdd();
