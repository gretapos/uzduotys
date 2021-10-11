//console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;


var sk = false;
var i = 0;
var sum = 0;
var ciklai = 0;
  while (sk == false) {
    i = Math.floor(Math.random() * 11);
    console.log(i);
    ciklai++;
    sum += i;
    if (sum > 20 && ciklai > 11) {
        sk = true;
    }
  }
  console.log("ciklai", ciklai)

 