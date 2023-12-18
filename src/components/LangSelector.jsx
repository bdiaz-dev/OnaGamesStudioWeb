import { Link, useParams } from 'react-router-dom'
export default function LangSelector ({ responsive = false }) {
  const currentUrl = window.location.pathname
  const { lang } = useParams()
  const path = (currentUrl.length > 3) ? currentUrl.slice(4) : ''
  return (
    <div
      className='langSelector'
      style={responsive ? { position: 'inline' } : { position: 'absolute' }}
    >
      <Link
        to={`/es/${path}`}
        style={(lang === 'es') ? { textDecoration: 'underline' } : {}}
      >
        Español
      </Link>
      <span> / </span>
      <Link
        to={`/en/${path}`}
        style={(lang === 'en') ? { textDecoration: 'underline' } : {}}
      >
        English
      </Link>
    </div>
  )
}
