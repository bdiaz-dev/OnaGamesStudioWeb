import useTexts from '../hooks/useTexts'

export default function Contact () {
  const { text } = useTexts('contact')
  const { href } = window.location
  const thanks = href.replace('contact', 'thanks')

  return (
    <div>
      <h1>{text.title}</h1>
      <form
        action='https://formsubmit.co/onagamesstudio@gmail.com'
        method='POST'
        className='contactForm'
      >
        <input type='text' name='name' placeholder={text.name} />
        <input type='text' name='email' placeholder={text.email} />
        <textarea name='question' id='' cols='30' rows='10' placeholder={text.text} />
        <input type='hidden' name='_captcha' value='false' />
        <input type='hidden' name='_next' value={thanks} />
        <button>{text.button}</button>
      </form>
    </div>
  )
}
