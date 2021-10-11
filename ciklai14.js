//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;


  var sk = false;
  var sk1 = 0;
  var sk2 = 0;
  var sum1 = 0; 
  var sum2 = 0;
  while (sk == false) {
      sk1 = Math.floor(Math.random() * 11);
      sk2 = Math.floor(Math.random() * 11);
      console.log('skaicius 1: ' + sk1, 'skaicius 2: ' + sk2);
      sum1 += sk1;
      sum2 += sk2; 
      if (sk1 != sk2 && sum1 > 100 && sum2 > 100) {
          sk = true;
      }
      console.log(sum1, sum2)
  }
  
  