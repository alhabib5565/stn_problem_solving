const sortedCars = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2022,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2018,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2020,
  },
  {
    make: "Chevrolet",
    model: "Silverado",
    year: 2019,
  },
  {
    make: "BMW",
    model: "X5",
    year: 2023,
  },
];

console.log(sortedCars(cars));
