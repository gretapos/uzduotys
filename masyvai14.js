//Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

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

var naujausiaPinigine =[]
naujausiaPinigine.push(naujaPinigine1, naujaPinigine2, ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']);

console.log("naujausia pinigine: ", naujausiaPinigine)

naujausiaPinigine[2].sort();

console.log("korteles pagal abecele: ", naujausiaPinigine)


for (let i = naujausiaPinigine[2].length; i < 20; i++) {
     if (Math.trunc(Math.random() * 2) < 1) {
        naujausiaPinigine[2][i] = "MasterCard";
    } else {
        naujausiaPinigine[2][i] = "Visa";
     }
 }
     console.log("i korteliu skyriu prideta atsitiktiniu Visa ir Master kortelius ir masyvo ilgis yra 20:", naujausiaPinigine[2]);

     while (naujausiaPinigine[2].length <= 20){
         if (Math.trunc(Math.random() * 2) < 1) {
            naujausiaPinigine[2].push("MasterCard");
        } else {
            naujausiaPinigine[2].push("Visa");
        }
    };

    console.log('Visa ir MasterCard + korteles: ', naujausiaPinigine[2])

    var VisaKiekis = 0;
    var MasterCardKiekis = 0;
    naujausiaPinigine[2].forEach((kortele, index) => {
        if (kortele == 'Visa') {
            VisaKiekis++
        } else if (kortele == 'MasterCard'){
            MasterCardKiekis++;
        }
    });
    console.log('Visa kiekis: ', VisaKiekis, 'MasterCard kiekis: ', MasterCardKiekis)