function createPhone(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if(numbers.length !== 10 ) {
        console.log("El array debe contener solo numero enteros positivos, y 10 numeros entre 0 y 9");
        return
        }
    }

    const formatPhone = numbers.join("");
    const areaCode = formatPhone.slice(0, 3);
    const firstNumber = formatPhone.slice(3, 6);
    const secondNumber = formatPhone.slice(6);

    return `(${areaCode}) ${firstNumber} - ${secondNumber}`
}

const numbers = [3,1,1,7,4,7,0,6,3,6];
const numberPhone = createPhone(numbers);
console.log(numberPhone)


