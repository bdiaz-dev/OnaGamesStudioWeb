import { Link } from 'react-router-dom'
import LangSelector from './LangSelector'

export default function Menu ({ lang, onError = false }) {
  return (
    <nav className='menuNormal'>
      <Link to={`/${lang}`}>
        <button>
          {(lang === 'es') ? 'Inicio' : 'Home'}
        </button>
      </Link>
      <Link to={`/${lang}/ourgames`}>
        <button>
          {(lang === 'es') ? 'Juegos' : 'Our Games'}
        </button>
      </Link>
      <Link to={`/${lang}/contact`}>
        <button>
          {(lang === 'es') ? 'Contacto' : 'Contact'}
        </button>
      </Link>
      {/* <Link to={`/${lang}/blocksurvivor`}>
        <button>
          {(lang === 'es') ? 'bs' : 'bs'}
        </button>
      </Link> */}
      {!onError && <LangSelector />}
    </nav>
  )
}
