//console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

var sk = false;
var i = 0;
var ciklai = 0;
  while (sk == false) {
    i = Math.floor(Math.random() * 11);
    console.log(i);
    ciklai++;
    if (i == 5 || i == 7) {
        sk = true;
    }
  }
  console.log('ciklai', ciklai)