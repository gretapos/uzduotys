//Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

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
var sumaPopieriniu = 0;
pinigine.forEach((pinigas, index) => {
    if (pinigas <= 2) {
        naujaPinigine1.push(pinigas);
    } else {
        naujaPinigine2.push(pinigas);
        sumaPopieriniu += pinigas;
    }
});
console.log("nauja pinigine 1: ", naujaPinigine1, 'nauja pinigine 2: ', naujaPinigine2, 'suma pinigine: ', sumaPopieriniu)

var naujausiaPinigine = []
naujausiaPinigine.push(naujaPinigine1, naujaPinigine2);

while (sumaPopieriniu < 500) {
    var popierinisPinigas = Math.trunc(Math.random() * (10 - 3) + 3);
     if (popierinisPinigas + sumaPopieriniu > 500) {
        popierinisPinigas = 500 - sumaPopieriniu;
     }

    console.log(popierinisPinigas);
    naujausiaPinigine[1].push(popierinisPinigas);
    sumaPopieriniu += popierinisPinigas;
}

console.log("naujausia pinigine: ", naujausiaPinigine, "popieriniu pinigu suma: ", sumaPopieriniu)