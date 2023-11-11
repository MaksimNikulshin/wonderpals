import Template from './Template.jsx'
import Home from 'pages/Home.jsx'
import Error from 'pages/Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const routing = createBrowserRouter([
    {
      path: '/',
      element: <Template />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
  ])

  return <RouterProvider router={routing} />
}
