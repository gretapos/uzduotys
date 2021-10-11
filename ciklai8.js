//console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

var sk = false;
var i = 0;
while (sk == false) {
    i = Math.floor(Math.random() * 11);
    console.log(i);
    if (i == 5) {
        sk = true;
    }
}