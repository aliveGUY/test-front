import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageOne />
  },
  {
    path: '/element/:id',
    element: <PageTwo />
  }
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
