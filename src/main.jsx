import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './pages/Admin/Admin.jsx'
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/Register/SingIn/SignIn.jsx'
import Register from './pages/Register/Register.jsx'
import SignUp from './pages/Register/SignUp/SignUp.jsx'
import NewFamily from './components/NewFamily/NewFamily.jsx'
import ShowFamily from './pages/ShowFamily/ShowFamily.jsx'

const routes = createBrowserRouter([
  {
    path: '/', element: <App></App>, children: [
      { path: '', element: <Home></Home> },
      {
        path: 'admin', element: <Admin></Admin>, children: [
          { path: 'newFamily', element: <NewFamily></NewFamily> },
          { path: 'showFamily', element: <ShowFamily></ShowFamily>}
        ]
      },
    ]
  },
  {
    path: '/register', element: <Register></Register>,
    children: [
      { path: '', element: <SignIn></SignIn> },
      { path: 'signup', element: <SignUp></SignUp> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  </StrictMode>,
)
