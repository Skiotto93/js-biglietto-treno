// 1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // prezzo del biglietto al km
const priceAtKm = 0.21;
    // età passeggero     
const age = 33;
    // distanza percorsa
const distanceTraveled = 653;
    // calcolo prezzo lordo
const grossPrice = (priceAtKm * distanceTraveled);
console.log ("Prezzo lordo" + grossPrice + "€");
// 2. va applicato uno sconto del 20% per i minorenni, va applicato uno sconto del 40% per gli over 65 
if (age < 18) {
    discount = 0.2;
    netDiscount = (grossPrice * discount);
    netPrice = (grossPrice - netDiscount);
} else if (age >= 65) {
    discount = 0.4;
    netDiscount = (grossPrice * discount);
    netPrice = (grossPrice - netDiscount);
} else if ( 18 < age && age > 65) {
    netPrice = (grossPrice);
} 

console.log ("Sconto" + netDiscount + "€");
console.log ("Prezzo netto" + netPrice + "€") ;
// Prezzo finale (con al massimo 2 numeri decimali)
finalPrice = ( Math.round(netPrice * 100) / 100 );
console.log (finalPrice + "€")