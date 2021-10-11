//console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

var sk = false;
var i = 0;
var sum = 0;
  while (sk == false) {
    i = Math.floor(Math.random() * 11);
    console.log(i);
    sum += i;
    if (sum > 100) {
        sk = true;
    }
  }