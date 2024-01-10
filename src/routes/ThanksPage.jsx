import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import useTexts from '../hooks/useTexts'

export default function ThanksPage () {
  const { text } = useTexts('thanks')
  const [count, setCount] = useState(11)
  const navigate = useNavigate()
  const { lang } = useParams()
  // useEffect(() => {
  //   setTimeout(() => {
  //     const route = '..'
  //     navigate(route, { replace: true })
  //   }, 12000)
  // }, [])
  useEffect(() => {
    const route = '..'
    if (count <= 0) navigate(route, { replace: true })
    setTimeout(() => {
      const newCount = (count - 1)
      setCount(newCount)
    }, 1000)
  }, [count])
  return (
    <>
      <h2>{text.title}</h2>
      <p>{text.para}</p>
      <hr />
      <h5>{text.alert}</h5>
      <h2>{count}</h2>
      <Link to={`/${lang}`}>
        <button>
          {text.button}
        </button>
      </Link>
    </>
  )
}
