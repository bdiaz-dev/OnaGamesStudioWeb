import { useState, useEffect } from 'react'

export default function GoogleBadge ({ game, lang }) {
  const [URL, setURL] = useState()
  useEffect(() => {
    switch (game) {
      case 'bs':
        setURL('https://play.google.com/store/apps/details?id=studio.onagames.blocksurvivor&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1')
        break
      case 'amigos':
        setURL('https://play.google.com/store/apps/details?id=studio.onagames.amigospalabras&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1')
    }
  }, [game])
  return (
    <a
      style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      target='blank'
      href={URL}
    >
      <img
        className='googleBadge'
        alt='Disponible en Google Play'
        src={`https://play.google.com/intl/en_us/badges/static/images/badges/${lang}_badge_web_generic.png`}
      />
    </a>
  )
}
