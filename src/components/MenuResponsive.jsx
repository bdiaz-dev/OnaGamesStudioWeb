import { Link } from 'react-router-dom'
import LangSelector from './LangSelector'
import { useState, useEffect } from 'react'
import '../styles/menuResponsive.css'

export default function MenuResponsive ({ lang }) {
  const [opened, setOpened] = useState(true)

  const handleMenu = () => {
    const newValue = !opened
    const menu = document.querySelector('.menuResponsive')
    const button = document.querySelector('.fa-xmark')
    if (newValue) {
      menu.style.transform = ''
      button.style.rotate = '90deg'
    } else {
      menu.style.transform = 'translateY(-100%)'
      button.style.rotate = '225deg'
    }
    setOpened(newValue)
  }
  useEffect(handleMenu, [])
  return (
    <div className='menuResponsiveContainer'>
      <button onClick={handleMenu} className='openMenuResponsive' title='openMenu'>
        <i className='fa-solid fa-xmark fa-2x' />
      </button>
      <nav className='menuResponsive'>
        <Link to={`/${lang}`}>
          <button className='menuResponsiveButton' onClick={handleMenu}>
            {(lang === 'es') ? 'Inicio' : 'Home'}
          </button>
        </Link>
        <Link to={`/${lang}/ourgames`}>
          <button className='menuResponsiveButton' onClick={handleMenu}>
            {(lang === 'es') ? 'Juegos' : 'Our Games'}
          </button>
        </Link>
        <Link to={`/${lang}/contact`}>
          <button className='menuResponsiveButton' onClick={handleMenu}>
            {(lang === 'es') ? 'Contacto' : 'Contact'}
          </button>
        </Link>
        <LangSelector responsive />
      </nav>
    </div>
  )
}
