// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const maleNames = (people) => {
  return people
    .filter((person) => person.gender !== "Female")
    .map((person) => person.name);
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

console.log(maleNames(people));
