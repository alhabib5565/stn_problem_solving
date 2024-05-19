const compositionFunction = (squareANumber, doubleANumber, addFive) => {
  return function (number) {
    return addFive(doubleANumber(squareANumber(number)));
  };
};

const squareANumber = (number) => {
  return number * number;
};

const doubleANumber = (number) => {
  return number * 2;
};

const addFive = (number) => {
  return number + 5;
};
const squareDoubleAndAddFive = compositionFunction(
  squareANumber,
  doubleANumber,
  addFive
);
console.log(squareDoubleAndAddFive(3));
