function nex_Pal(numero) {
  while (numero >0) {
    numero++;
    const numeroString = numero.toString();
    let numreverse = numeroString.split("").reverse().join("");
    if (numeroString === numreverse) {
      return numero;
    } 
    
  }
  console.log("El numero debe ser un entero positivo")
}

console.log(nex_Pal(43));
