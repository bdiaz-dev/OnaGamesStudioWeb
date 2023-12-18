import { Outlet, useParams } from 'react-router-dom'

import Menu from '../components/Menu'
import MenuResponsive from '../components/MenuResponsive'
import Sign from '../components/Sign'
import HeaderLogo from '../components/HeaderLogo'

export default function Home () {
  const { lang } = useParams()
  return (
    <>
      <HeaderLogo />
      <Menu lang={lang} />
      <MenuResponsive lang={lang} />
      <Outlet />
      <Sign />
    </>
  )
}
