/* eslint-disable react/prop-types */
export default function BookForm({ setForm, handleSubmit, form }) {
  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input value={form.title} onChange={handleChange} name="title" type="text" className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input value={form.author} onChange={handleChange} name="author" type="text" className="form-control" id="author" />
      </div>
      <div className="mb-3">
        <label htmlFor="year" className="form-label">
          Year
        </label>
        <input value={form.year} onChange={handleChange} name="year" type="number" className="form-control" id="year" />
      </div>
      <button className="btn btn-primary form-control">Submit</button>
    </form>
  );
}
