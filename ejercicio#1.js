const num_max = 200;
const numero = 99;

const siguientePalindromo = Nex_Pal(num_max, numero);

function Num_Pal(numero) {
    let reversar = numero.toString().split('').reverse().join('');
    return numero.toString() === reversar;
}

function Nex_Pal(num_max, numero) {
    let siguientePalindromo = 0;
    let numeroActual = numero + 1;
    
    while (numeroActual <= num_max) {
        if (Num_Pal(numeroActual)) {
        siguientePalindromo = numeroActual;
        break;        
        }
    numeroActual++;
    console.log(numeroActual)
    }    
    return siguientePalindromo;
}

if (siguientePalindromo !== 0) {
    console.log("El siguiente número palíndromo después de " + numero + " es: " + siguientePalindromo);
    } else {
    console.log("No se encontró un siguiente número palíndromo después de " + numero);
    }