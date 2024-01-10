import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Background from '../components/Background'

export default function Index () {
  const currentUrl = window.location.pathname
  const lang = (navigator.language).substring(0, 2)
  const navigate = useNavigate()
  useEffect(() => {
    // window.location.reload()
    if (currentUrl.length > 3) return
    const route = (lang === 'es') ? '../es' : '../en'
    navigate(route, { replace: true })
  }, [])
  return (
    <>
      <Background />
      <Outlet />
    </>
  )
}
