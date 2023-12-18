import { Outlet, useParams } from 'react-router-dom'

import headerLogo from '../assets/img/titulo.png'

import Menu from '../components/Menu'
import MenuResponsive from '../components/MenuResponsive'
import Sign from '../components/Sign'

export default function Home () {
  const { lang } = useParams()
  return (
    <>
      <img src={headerLogo} alt='Ona Games Logo' className='headerLogo' />
      <Menu lang={lang} />
      <MenuResponsive lang={lang} />
      <Outlet />
      <Sign />
    </>
  )
}
