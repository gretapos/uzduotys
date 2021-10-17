//Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

var pinigine = [];
const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (var i = 0; i < ilgis; i++) {
     var pinigai = Math.trunc(Math.random() * 11);
     pinigine.push(pinigai);
 }
 console.log("masyvas: ", pinigine);

 var didziausiaReiksme = 0
 pinigine.forEach((pinigas, index) => {
     if (pinigas > didziausiaReiksme) {
        didziausiaReiksme = pinigas;
     }
 });
 console.log("didziausia reiksme: ", didziausiaReiksme)

 var didziausiuReiksmiuKiekis = 0
 pinigine.forEach((pinigas, index) => {
     if (pinigas == didziausiaReiksme) {
         didziausiuReiksmiuKiekis++
     }
 });
 console.log("didziausiu reiksmiu kiekis: ", didziausiuReiksmiuKiekis)