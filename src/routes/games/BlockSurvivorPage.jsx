import useTexts from '../../hooks/useTexts'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { BSimages } from '../../constants/imgObjs'
import { trailerBS } from '../../constants/urls'

import ModalVideo from '../../components/ModalVideo'
import GoogleBadge from '../../components/GoogleBadge'
import ModalImage from '../../components/ModalImg'
import FigureGames from '../../components/FigureGames'

export default function BlockSurvivorPage () {
  const [videoURL, setVideoURL] = useState('')
  const [imgURL, setImgURL] = useState('')
  const { text } = useTexts('blockSurvivor')
  const { lang } = useParams()

  const handleModalVideo = () => {
    if (videoURL) {
      setVideoURL('')
      return
    }
    setVideoURL(trailerBS)
  }
  const handleModalImage = (img) => {
    if (imgURL) {
      setImgURL('')
      return
    }
    switch (img) {
      case 1:
        setImgURL(BSimages.BScap1)
        break
      case 2:
        setImgURL(BSimages.BScap2)
        break
      case 3:
        setImgURL(BSimages.BScap3)
        break
    }
  }
  return (
    <>
      <img className='bs-title' src={BSimages.BStitle} alt='Block Survivor title' />

      <div className='articleText'>
        <h2>{text.subtitle}</h2>

        <FigureGames
          onClick={handleModalVideo}
          img={BSimages.BSrec1}
          text={text.figures[0]}
          alt='Block Survivor Screenshot'
        />

        {videoURL && <ModalVideo url={videoURL} toClose={handleModalVideo} />}

        <p>{text.text[0]}</p>
        <p>{text.text[1]}</p>

        <FigureGames
          onClick={() => handleModalImage(1)}
          img={BSimages.BSrec4}
          text={text.figures[1]}
          alt='Block Survivor Screenshot'
        />

        {imgURL && <ModalImage url={imgURL} toClose={handleModalImage} alt='Block Survivor Screenshot' />}

        <p>{text.text[2]}</p>
        <p>{text.text[3]}</p>

        <FigureGames
          onClick={() => handleModalImage(2)}
          img={BSimages.BSrec3}
          text={text.figures[2]}
          alt='Block Survivor Screenshot'
        />

        <p>{text.text[4]}</p>

        <FigureGames
          onClick={() => handleModalImage(3)}
          img={BSimages.BSrec2}
          text={text.figures[3]}
          alt='Block Survivor Screenshot'
        />

        <p>{text.text[5]}</p>

        <GoogleBadge lang={lang} game='bs' />
      </div>
    </>
  )
}
