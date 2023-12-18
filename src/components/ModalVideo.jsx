import '../styles/modal.css'
export default function ModalVideo ({ url, toClose }) {
  return (
    <div className='modal'>
      <b onClick={toClose}><i className='fa-solid fa-xmark fa-2x' /> Close</b>
      <iframe width='560' height='315' src={url} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
    </div>
  )
}
