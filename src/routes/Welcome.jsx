import useTexts from '../hooks/useTexts'

export default function Welcome () {
  const { text } = useTexts('welcome')
  return (

    <article className='articleText'>
      <h2>{text.title}</h2>
      <p>{text.text[0]}</p>
      <p>{text.text[1]}</p>
      <p>{text.text[2]}</p>
      <p>{text.text[3]}</p>
    </article>
  )
}
