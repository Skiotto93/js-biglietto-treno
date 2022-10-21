// 1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // prezzo del biglietto al km
const priceAtKm = 0.21;
    // età passeggero     
const age = Number ( prompt("inserisci la tua età"));
    // distanza percorsa
const distanceTraveled = Number ( prompt("inserisci la distanza da percorrere"));
if( isNaN(distanceTraveled) || isNaN(age) || distanceTraveled <= 0 || age <= 0 ) {
    alert("Attento! devi inserire dei numeri e i numeri devo essere!");
    window.location.reload();
}
    // calcolo prezzo lordo
const grossPrice = (priceAtKm * distanceTraveled);
let netDiscount = 0 ;
let netPrice = 0 ;
// 2. va applicato uno sconto del 20% per i minorenni, va applicato uno sconto del 40% per gli over 65 
if (age < 18) {
    discount = 0.2;
    netDiscount = (grossPrice * discount);
    netPrice = (grossPrice - netDiscount);
} else if (age >= 65) {
    discount = 0.4;
    netDiscount = (grossPrice * discount);
    netPrice = (grossPrice - netDiscount);
} else if ( 18 < age && age > 65 ) {
    discount = 0 ;
    netPrice = (grossPrice - netDiscount);
    netDiscount = 0;
} 
// Prezzo finale (con al massimo 2 numeri decimali)
finalDiscount = ( Math.round(netDiscount * 100) / 100 );
finalPrice = ( Math.round(netPrice * 100) / 100 );

document.getElementById("PrezzoLordo").innerHTML = "Prezzo del biglietto " + grossPrice + " €" + " -";
document.getElementById("Sconto").innerHTML ="Sconto " + finalDiscount + " €" + " =" ;
document.getElementById("Totale").innerHTML ="Totale " + finalPrice + " €";