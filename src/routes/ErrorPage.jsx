import { useRouteError } from 'react-router-dom'
import Menu from '../components/Menu'
import { spanishError } from '../constants/espTexts'
import { englishError } from '../constants/engTexts'
import gameOver from '../assets/img/game-over.png'

export default function ErrorPage () {
  const lang = (navigator.language).substring(0, 2)
  const error = useRouteError()
  const text = (lang === 'es')
    ? { ...spanishError }
    : { ...englishError }
  return (
    <div className='errorPage'>
      <img src={gameOver} />
      {/* <h1>{text.title}</h1> */}
      <h2>{text.text1}</h2>
      <h3 style={{ color: 'red' }}>{'Error ' + error.status + ': ' + error.statusText}</h3>
      <p>{text.text2}</p>
      <Menu onError lang={lang} />
    </div>
  )
}
