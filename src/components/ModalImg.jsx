import '../styles/modal.css'
export default function ModalImage ({ url, toClose, alt }) {
  return (
    <div className='modal'>
      <b onClick={toClose}><i className='fa-solid fa-xmark fa-2x' /> Close</b>
      <img src={url} alt={alt} />
    </div>
  )
}
