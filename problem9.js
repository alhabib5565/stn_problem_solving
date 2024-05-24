// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.
const uniqueValues = (numbers) => {
  const uniqueNumbers = [...new Set(numbers)];
  return uniqueNumbers;
};

const numbers = [1, 1, 2, 3, 2, 4, 3];
console.log(uniqueValues(numbers));
