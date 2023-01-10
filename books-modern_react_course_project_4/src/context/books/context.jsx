import { createContext, useState, useEffect } from "react";
import axios from "axios";
const BooksContext = createContext();

const Provider = function ({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data } = await axios.get("http://localhost:3001/books");
    setBooks(data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  const valuesToShare = { books, setBooks };
  return (
    <BooksContext.Provider value={valuesToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
