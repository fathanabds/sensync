import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

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
