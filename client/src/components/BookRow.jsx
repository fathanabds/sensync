import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosClient from '../utils/axiosClient';

/* eslint-disable react/prop-types */
export default function BookRow({ book, index, fetchBooks }) {
  async function handleDelete() {
    try {
      await axiosClient.delete(`/books/${book.id}`);
      fetchBooks();
      Swal.fire('Book deleted successfully', '', 'success');
    } catch (error) {
      console.log(error);
      Swal.fire(error.response.data.message, '', 'error');
    }
  }

  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.year}</td>
        <td className="d-flex gap-2 flex-column">
          <Link to={`/books/edit/${book.id}`} className="btn btn-warning">
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
