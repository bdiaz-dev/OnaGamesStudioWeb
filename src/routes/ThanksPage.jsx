import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useTexts from '../hooks/useTexts'

export default function ThanksPage () {
  const { text } = useTexts('thanks')
  const [count, setCount] = useState(5)
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      const route = '..'
      navigate(route, { replace: true })
    }, 6000)
  }, [])
  useEffect(() => {
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
    </>
  )
}
