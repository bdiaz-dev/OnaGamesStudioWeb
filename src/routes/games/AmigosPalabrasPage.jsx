import useTexts from '../../hooks/useTexts'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { APimages } from '../../constants/imgObjs'
import { trailerAP } from '../../constants/urls'

import ModalVideo from '../../components/ModalVideo'
import GoogleBadge from '../../components/GoogleBadge'
import ModalImage from '../../components/ModalImg'
import FigureGames from '../../components/FigureGames'

export default function BlockSurvivorPage () {
  const [videoURL, setVideoURL] = useState('')
  const [imgURL, setImgURL] = useState('')
  const { text } = useTexts('amigosPalabras')
  const { lang } = useParams()

  const handleModalVideo = () => {
    if (videoURL) {
      setVideoURL('')
      return
    }
    setVideoURL(trailerAP)
  }
  const handleModalImage = (img) => {
    if (imgURL) {
      setImgURL('')
      return
    }
    switch (img) {
      case 2:
        setImgURL(APimages.APcap2)
        break
      case 3:
        setImgURL(APimages.APcap3)
        break
      case 4:
        setImgURL(APimages.APcap4)
        break
    }
  }
  return (
    <>
      <img className='bs-title' src={APimages.APtitle} alt='Block Survivor title' />

      <div className='articleText'>
        <h2>{text.subtitle}</h2>

        <FigureGames
          onClick={handleModalVideo}
          img={APimages.APrec1}
          text={text.figures[0]}
          alt='Block Survivor Screenshot'
        />

        {videoURL && <ModalVideo url={videoURL} toClose={handleModalVideo} />}

        <p>{text.text[0]}</p>

        <FigureGames
          onClick={() => handleModalImage(2)}
          img={APimages.APrec2}
          text={text.figures[1]}
          alt='Block Survivor Screenshot'
        />
        <p>{text.text[1]}</p>

        {imgURL && <ModalImage url={imgURL} toClose={handleModalImage} alt='Block Survivor Screenshot' />}
        <FigureGames
          onClick={() => handleModalImage(3)}
          img={APimages.APrec3}
          text={text.figures[2]}
          alt='Block Survivor Screenshot'
        />

        <p>{text.text[2]}</p>
        <FigureGames
          onClick={() => handleModalImage(4)}
          img={APimages.APrec4}
          text={text.figures[3]}
          alt='Block Survivor Screenshot'
        />
        <p>{text.text[3]}</p>

        <GoogleBadge lang={lang} game='amigos' />
      </div>
    </>
  )
}
