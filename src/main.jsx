import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './pages/Admin/Admin.jsx'
import SignIn from './pages/Register/SingIn/SignIn.jsx'
import Register from './pages/Register/Register.jsx'
import SignUp from './pages/Register/SignUp/SignUp.jsx'


const routes = createBrowserRouter([
  {
    path: '/', element: <App></App>, childern: [
      { path:'admin', element: <Admin></Admin> }
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
