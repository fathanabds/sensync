import { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClient';
import BookRow from '../components/BookRow';
import Swal from 'sweetalert2';

export default function Home() {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
      const { data } = await axiosClient.get('/books');
      setBooks(data);
    } catch (error) {
      console.log(error);
      Swal.fire(error.response.data.message, '', 'error');
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5">Welcome to Book Management System</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Year</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center">
                  No books available
                </td>
              </tr>
            )}
            {books.map((book, index) => (
              <BookRow fetchBooks={fetchBooks} index={index} key={book.id} book={book} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
