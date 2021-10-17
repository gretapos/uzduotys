//Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

var pinigine = [];
const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (var i = 0; i < ilgis; i++) {
     var pinigai = Math.trunc(Math.random() * 11);
     pinigine.push(pinigai);
 }
 console.log("masyvas: ", pinigine);

 pinigine.forEach((pinigas, index) => {
     if (pinigas == 0) {
         pinigine[index] = index;
     }
 });
 console.log("reiksmes ", pinigine)