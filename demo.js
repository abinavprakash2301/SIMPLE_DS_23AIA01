function unique(arr) {
    let count = arr.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {});

    let uniqueValues = Object.keys(count).filter(num => count[num] === 1).map(Number);
    let repeatedValues = Object.keys(count).filter(num => count[num] > 1).map(Number);

    return { uniqueValues, repeatedValues };
}

let numbers = [10, 10, 20, 30];
let result = unique(numbers);

console.log("Unique Values:", result.uniqueValues);
console.log("Repeated Values:", result.repeatedValues); 
