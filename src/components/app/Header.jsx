import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

import 'styles/app/header.scss'

export default function Header() {
  //Initialization state manager
  const [burger, setBurger] = useState(false)
  const [language, setLanguage] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setBurger(false)
  }, [])

  const changeLanguage = language => {
    i18n.changeLanguage(language)
    setLanguage(false)
  }

  return (
    <header>
      <nav>
        <div>
          <Link to='main'>{t('WONDERPALS')}</Link>
        </div>
        <div className={burger ? 'sub-menu active' : 'sub-menu'}>
          <Link to='portfolio'>{t('PORTFOLIO')}</Link>
          <Link to='our-services'>{t('SERVICES')}</Link>
          <Link to='news-letter'>{t('NEWS LETTER')}</Link>
          <Link to='team'>{t('TEAM')}</Link>
          <Link to='news'>{t('NEWS')}</Link>
          <p
            onClick={() => setLanguage(!language)}
            className='change-language'>
            {localStorage.getItem('i18nextLng')}
          </p>
          <div
            className={
              language ? 'language-container active' : 'language-container'
            }>
            <a onClick={() => changeLanguage('eng')}>ENG</a>
            <a onClick={() => changeLanguage('ro')}>RO</a>
            <a onClick={() => changeLanguage('ru')}>RU</a>
          </div>
        </div>
        <div
          className={burger ? 'burger active' : 'burger'}
          onClick={() => setBurger(!burger)}>
          <span />
          <span />
          <span />
        </div>
      </nav>
    </header>
  )
}
