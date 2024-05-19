// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const updateAge = (people, name, newAge) => {
  const specificPerson = people.find((person) => person.name === name);
  specificPerson.age = newAge;
  return specificPerson;
};

const people = [
  {
    name: "John Doe",
    age: 30,
    gender: "Male",
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "Female",
  },
  {
    name: "Alice Johnson",
    age: 28,
    gender: "Female",
  },
  {
    name: "Bob Brown",
    age: 35,
    gender: "Male",
  },
  {
    name: "Emily Davis",
    age: 22,
    gender: "Female",
  },
];

console.log(updateAge(people, "John Doe", 0));
