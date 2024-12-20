import { useNavigate, useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClient';

export default function EditBook() {
  const { id } = useParams();

  const nav = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    year: '',
  });

  async function fetchBook() {
    try {
      const { data } = await axiosClient.get(`/books/${id}`);
      setForm(data);
    } catch (error) {
      console.log(error);
      Swal.fire(error.response.data.message, '', 'error');
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axiosClient.put(`books/${id}`, form);
      nav('/');
    } catch (error) {
      console.log(error);
      Swal.fire(error.response.data.message, '', 'error');
    }
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5">Edit Book</h1>
        <BookForm setForm={setForm} handleSubmit={handleSubmit} form={form} />
      </div>
    </>
  );
}
