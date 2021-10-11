//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

var sk = false;
var sk1 = 0;
var sk2 = 0;
while (sk == false) {
    sk1 = Math.floor(Math.random() * 11);
    sk2 = Math.floor(Math.random() * 11);
    console.log('skaicius 1: ' + sk1, 'skaicius 2: ' + sk2);
    if (sk1 != sk2) {
        sk = true;
    }
}

