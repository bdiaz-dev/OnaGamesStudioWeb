import { useParams } from 'react-router-dom'
import * as spanish from '../constants/espTexts'
import * as english from '../constants/engTexts'

export default function useTexts (page) {
  const { lang } = useParams()

  const text = (lang === 'es')
    ? { ...spanish[page] }
    : { ...english[page] }

  return { text, lang }
}
