import { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClient';
import Swal from 'sweetalert2';
import BookRow from '../components/BookRow';

export default function Home() {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
      const { data } = await axiosClient.get('/books');
      setBooks(data);
    } catch (error) {
      console.log(error);
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
            <BookRow />
          </tbody>
        </table>
      </div>
    </>
  );
}
