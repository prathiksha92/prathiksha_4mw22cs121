function findMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    return Math.max(...numbers);
}

// Example usage:
const myArray = [10, 5, 8, 15, 3];
const maxNumber = findMax(myArray);
console.log(`Maximum number: ${maxNumber}`);
