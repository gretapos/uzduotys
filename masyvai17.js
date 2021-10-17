//Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.


var pinigine = [];
const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (var i = 0; i < ilgis; i++) {
    var pinigai = Math.trunc(Math.random() * 11);
    pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);

var naujaPinigine1 = [];
var naujaPinigine2 = [];
pinigine.forEach((pinigas, index) => {
    if (pinigas <= 2) {
        naujaPinigine1.push(pinigas);
    } else {
        naujaPinigine2.push(pinigas);
    }
});
console.log("nauja pinigine 1: ", naujaPinigine1, 'nauja pinigine 2: ', naujaPinigine2)

var naujausiaPinigine = []
naujausiaPinigine.push(naujaPinigine1, naujaPinigine2, ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']);

console.log("naujausia pinigine: ", naujausiaPinigine);

while (naujausiaPinigine[2].length <= 20) {
    if (Math.trunc(Math.random() * 2) < 1) {
        naujausiaPinigine[2].push("MasterCard");
    } else {
        naujausiaPinigine[2].push("Visa");
    }
}

console.log('Visa ir MasterCard + korteles: ', naujausiaPinigine[2])

var VisaKiekis = 0;
var MasterCardKiekis = 0;
naujausiaPinigine[2].forEach((kortele, index) => {
    if (kortele == 'Visa') {
        VisaKiekis++
    } else if (kortele == 'MasterCard') {
        MasterCardKiekis++;
    }
});
console.log('Visa kiekis: ', VisaKiekis, 'MasterCard kiekis: ', MasterCardKiekis)

var bilietai = [];
for (var i = 0; i < 10; i++) {
    var reiksmes = Math.trunc(Math.random() * (9999999999 - 1000000000) + 1000000000);
    bilietai.push(reiksmes);
}
naujausiaPinigine.push(bilietai);
console.log("pinigine + bilietai: ", naujausiaPinigine);

naujausiaPinigine[3].sort();

console.log("bilietai nuo maziausio iki didziausio: ", naujausiaPinigine[3])

var laiminguBilietuSkaicius = 0;
naujausiaPinigine[3].forEach(bilietas => {
    if (bilietas % 777 == 0) {
        laiminguBilietuSkaicius++;
    }
});

console.log("Laimingu bilietu skaicius: ", laiminguBilietuSkaicius)