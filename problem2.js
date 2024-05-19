const getBookTitles = (books) => {
  return books.map((book) => book.title);
};

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

console.log(getBooksTitles(books));
