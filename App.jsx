import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/books");

      if (!response.ok) {
        throw new Error("Помилка завантаження");
      }

      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    try {
      const response = await fetch("http://localhost:3001/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      const newBook = await response.json();

      setBooks([...books, newBook]);
    } catch {
      setError("Помилка додавання книги");
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(`http://localhost:3001/books/${id}`, {
        method: "DELETE",
      });

      setBooks(books.filter((book) => book.id !== id));
    } catch {
      setError("Помилка видалення книги");
    }
  };

  return (
    <>
      <Header />

      <BookForm addBook={addBook} />

      {loading && <p>Завантаження...</p>}

      {error && <p>{error}</p>}

      {!loading && (
        <BookList books={books} deleteBook={deleteBook} />
      )}

      <Footer />
    </>
  );
}

export default App;