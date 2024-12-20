import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/books/add',
        element: <AddBook />,
      },
      {
        path: '/books/edit/:id',
        element: <EditBook />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
