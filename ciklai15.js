//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).

var sk = false;
var sk1 = 0;
var sk2 = 0;
var nelygSk1 = 0;
var nelygSk2 = 0;
while (sk == false) {
    sk1 = Math.floor(Math.random() * 11);
    sk2 = Math.floor(Math.random() * 11);
    if (sk1 % 2 !== 0) {
        nelygSk1++;
    }

    if (sk2 % 2 !== 0) {
        nelygSk2++;
    }

    console.log('skaicius 1: ' + sk1, 'skaicius 2: ' + sk2);
    if (nelygSk1 >= 3 && nelygSk2 >= 3) {
        sk = true;
    }
}
