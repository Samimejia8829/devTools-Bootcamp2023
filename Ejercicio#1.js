const arrayPal = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,101,111,121,131,141,151,161,171,181,191]
const numero = 33;

function nex_Pal(numero) {
    let index = arrayPal.indexOf(numero);
        if (index <= arrayPal.length) {
        let siguiente = arrayPal[index + 1];
        console.log(`El siguiente palindromo después de ${numero} es: ${siguiente}`);
    } else {
        console.log(`No hay número palindromo después de ${numero}`);
    }
}

nex_Pal(numero)