import useTexts from '../hooks/useTexts'

export default function Contact () {
  const { text } = useTexts('contact')
  const thanksText = useTexts('thanks')
  const { href } = window.location
  const thanksRedirect = href.replace('contact', 'thanks')
  const handleThanks = () => {
    const thanksDialog = document.getElementById('thanksDialog')
    thanksDialog.showModal()
  }

  return (
    <div>
      <h1>{text.title}</h1>
      <form
        action='https://formsubmit.co/onagamesstudio@gmail.com'
        method='POST'
        className='contactForm'
        onSubmit={handleThanks}
      >
        <dialog id='thanksDialog'>
          <h1>{thanksText.text.title}</h1>
          <h2>{thanksText.text.para}</h2>
          <p>{thanksText.text.please}</p>
        </dialog>
        <input type='text' name='name' placeholder={text.name} required />
        <input type='email' name='email' placeholder={text.email} required />
        <textarea name='question' id='' cols='30' rows='10' placeholder={text.text} required />
        <input type='hidden' name='_captcha' value='false' />
        <input type='hidden' name='_next' value={thanksRedirect} />
        <button>{text.button}</button>
      </form>
    </div>
  )
}
