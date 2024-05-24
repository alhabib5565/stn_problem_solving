//Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

const findMaximumValue = (numbers) => {
  let maximumValue = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > maximumValue) {
      maximumValue = element;
    }
  }
  return maximumValue;
};

const numbers = [2, 23, 234, 22];
console.log(findMaximumValue(numbers));
