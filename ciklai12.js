//console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

var sk = 0;
var i;
while (sk < 3) {
    i = Math.floor(Math.random() * 11);
    console.log(i);
    if (i % 2 !== 0) {
        sk++;
    }
}
