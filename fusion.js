// 1. Función para calcular la potencia
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// 2. Función para obtener el número mayor
function getLargerInt(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

// 3. Función para generar una secuencia de Fibonacci
function fibonacciSequence(limit) {
    if (limit <= 0) {
        return [];
    } else if (limit === 1) {
        return [1];
    } else if (limit === 2) {
        return [1, 1];
    } else {
        const sequence = [1, 1];
        for (let i = 2; i < limit; i++) {
            const nextNumber = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextNumber);
        }
        return sequence;
    }
}

// 4. Función para calcular el promedio de un arreglo de números
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Ejemplo de uso de las funciones
var ageJohn = calculateAge(1994);
var largest = getLargerInt(10, 5);
var fibSequence = fibonacciSequence(10);
var average = calculateAverage([1, 2, 3, 4, 5]);

console.log('Resultado de calculateAge:', ageJohn);
console.log('Número mayor entre 10 y 5:', largest);
console.log('Secuencia de Fibonacci con 10 elementos:', fibSequence);
console.log('Promedio de [1, 2, 3, 4, 5]:', average);