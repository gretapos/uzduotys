//Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

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