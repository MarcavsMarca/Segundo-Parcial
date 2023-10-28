// Función para calcular la potencia
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// Función para obtener el número mayor
function getLargerInt(number1, number2) {
    return Math.max(number1, number2);
}

// Función para generar una secuencia de Fibonacci
function fibonacciSequence(limit) {
    const sequence = [1, 1];
    for (let i = 2; i < limit; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    return sequence.slice(0, limit);
}

// Función para calcular el promedio de un arreglo de números
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Ejemplos de uso de las funciones
const result = power(2, 3);  // Resultado de 2 elevado a la 3
const largest = getLargerInt(10, 5);  // Número mayor entre 10 y 5
const fibSequence = fibonacciSequence(10);  // Secuencia de Fibonacci con 10 elementos
const average = calculateAverage([1, 2, 3, 4, 5]);  // Promedio de una lista de números
