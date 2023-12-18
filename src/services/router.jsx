import { createBrowserRouter } from 'react-router-dom'
import Home from '../routes/Home'
import ErrorPage from '../routes/ErrorPage'
import OurGames from '../routes/OurGames'
import Welcome from '../routes/Welcome'
import Contact from '../routes/Contact'
import Index from '../routes/Index'
import BlockSurvivorPage from '../routes/games/BlockSurvivorPage'
import AmigosPalabrasPage from '../routes/games/AmigosPalabrasPage'
import ThanksPage from '../routes/ThanksPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/:lang',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/:lang',
            element: <Welcome />,
            errorElement: <ErrorPage />
          },
          {
            path: '/:lang/ourgames',
            element: <OurGames />,
            errorElement: <ErrorPage />
          },
          {
            path: '/:lang/contact',
            element: <Contact />,
            errorElement: <ErrorPage />
          },
          {
            path: '/:lang/blocksurvivor',
            element: <BlockSurvivorPage />,
            errorElement: <ErrorPage />
          },
          {
            path: '/:lang/amigosdepalabras',
            element: <AmigosPalabrasPage />,
            errorElement: <ErrorPage />
          },
          {
            path: '/:lang/thanks',
            element: <ThanksPage />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ]
  }
])

export default router
