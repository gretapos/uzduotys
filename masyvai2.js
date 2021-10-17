// Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

var pinigine = [];
const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (var i = 0; i < ilgis; i++) {
     var pinigai = Math.trunc(Math.random() * 11);
     pinigine.push(pinigai);
 }
 console.log("masyvas: ", pinigine);

 var suma = 0
 pinigine.forEach(poperinisPinigas => {
     suma += poperinisPinigas
 });
 console.log("pinigu suma: ", suma)