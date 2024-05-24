// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const sumOfEvenNumbers = (numbers) => {
  const total = numbers.reduce((previousValue, currentValue) => {
    if (currentValue % 2 === 0) {
      console.log(currentValue);
      return previousValue + currentValue;
    } else {
      return previousValue;
    }
  }, 0);
  return total;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumOfEvenNumbers(numbers));
