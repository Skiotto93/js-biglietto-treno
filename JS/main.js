// 1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
    //prezzo del biglietto al km
const priceAtKm = 0.21;
    //età passeggero     
const age = 16;
    //distanza percorsa
const distanceTraveled = 650;
const grossPrice = (priceAtKm * distanceTraveled);
console.log ("Prezzo lordo" + grossPrice + "€");
// 2. va applicato uno sconto del 20% per i minorenni, va applicato uno sconto del 40% per gli over 65 
if (age <18) {
    discount = 0.2;
    netDiscount = (grossPrice * discount);
    netPrice = (grossPrice - netDiscount);
} else if (age >= 65) {
    discount = 0.4;
    netDiscount = (grossPrice * discount);
    netPrice = (grossPrice - netDiscount);
}    
console.log ("Sconto" + netDiscount + "€");
    else (age > 18) && (age < 65)  
    discount = 0 ;
    netPrice = (grossPrice);

console.log ("Prezzo netto" + netPrice + "€") 
// Prezzo finale (con al massimo 2 numeri decimali)