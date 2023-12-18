import logoBS from '../assets/img/bs_ico.jpg'
import moveBS from '../assets/img/bs_move.gif'
import logoAmigos from '../assets/img/amigos_ico.png'
import moveAmigos from '../assets/img/amigos_move.gif'
import useTexts from '../hooks/useTexts'
import { Link } from 'react-router-dom'
export default function OurGames () {
  const { text, lang } = useTexts('games')
  const handleOver = (e, img) => {
    e.target.src = img
  }
  return (
    <div>
      <h1>{text.title}</h1>
      <ul className='gamesList'>
        <Link to={`/${lang}/blocksurvivor`}>
          <img
            src={logoBS}
            alt='Block Survivor Image'
            onMouseOver={(e) => { handleOver(e, moveBS) }}
            onMouseLeave={(e) => { handleOver(e, logoBS) }}
          />
        </Link>
        <Link to={`/${lang}/amigosdepalabras`}>
          <img
            src={logoAmigos}
            alt='Amigos de Palabras Image'
            onMouseOver={(e) => { handleOver(e, moveAmigos) }}
            onMouseLeave={(e) => { handleOver(e, logoAmigos) }}
          />
        </Link>
      </ul>
    </div>
  )
}
