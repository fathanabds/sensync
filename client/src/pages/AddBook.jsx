import { useNavigate } from 'react-router-dom';
import axiosClient from '../utils/axiosClient';
import { useState } from 'react';
import Swal from 'sweetalert2';
import BookForm from '../components/BookForm';

export default function AddBook() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    year: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axiosClient.post('/books', form);
      nav('/');
    } catch (error) {
      console.log(error);
      Swal.fire(error.response.data.message, '', 'error');
    }
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5">Add New Book</h1>
        <BookForm setForm={setForm} handleSubmit={handleSubmit} form={form} />
      </div>
    </>
  );
}
