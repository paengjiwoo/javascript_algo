function solution(polynomial) {
  const formula = polynomial.split(' + ');
  let x = 0;
  let num = 0;
  for (let i = 0; i < formula.length; i++) {
     let mono = formula[i];
     if (mono.endsWith('x')) {
         if (mono.length === 1) x += 1;
         else x += Number(mono.substring(0, mono.length - 1));
     }
     else num += Number(mono);
  };
    
  if (x > 0 && num > 0) return (x === 1 ? "" : x.toString()) + "x" + " + " + num.toString();
  if (x > 0) return (x === 1 ? "" : x.toString()) + "x";
  if (num > 0) return num.toString();
}