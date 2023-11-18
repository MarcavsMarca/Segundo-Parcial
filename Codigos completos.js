// Ejercicio 1
function power(base, exponent) {
    if (exponent === 0) {

      return 1; // Cualquier número elevado a la potencia 0 es 1

    } 
    else (exponent > 0) 
    {
      
      let result = 1;
      for (let i = 0; i < exponent; i++) {
        result *= base;
      }
      return result;
    }
  }

  console.log(power(2, 3));

  // Ejercicio 2
  function getLargerInt(number1, number2) {
    if (number1 > number2) {
      return number1;
    } else {
      return number2;
    }
  }
  
  console.log(getLargerInt(5, 10));
  
  // Ejercicio 3
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

  console.log(fibonacciSequence(10));

  // Ejercicio 4
  function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; // Si el arreglo está vacío, el promedio es 0.
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    
    const average = sum / numbers.length;
    return average;
  }
  
  const numbers = [2, 4, 6, 8, 10];
  console.log(calculateAverage(numbers));