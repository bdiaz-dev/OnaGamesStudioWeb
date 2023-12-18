import { Link, useParams } from 'react-router-dom'
import headerLogo from '../assets/img/titulo.png'

export default function HeaderLogo () {
  const { lang } = useParams()
  return (
    <Link to={`/${lang}`}>
      <img
        src={headerLogo}
        alt='Ona Games Logo'
        className='headerLogo'
      />
    </Link>
  )
}
