import './style.css'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import router from './src/services/router'

const root = createRoot(document.getElementById('root'))

root.render(
  <RouterProvider router={router} />
)
