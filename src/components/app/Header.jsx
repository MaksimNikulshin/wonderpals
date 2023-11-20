import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

import 'styles/app/header.scss'

export default function Header() {
  //Initialization state manager
  const [burger, setBurger] = useState(false)
  const [language, setLanguage] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('i18nextLng'))
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setBurger(false)
  }, [])

  const changeLanguage = language => {
    i18n.changeLanguage(language)
    setActiveLanguage(language)
    setLanguage(false)
  }

  return (
    <header>
      <nav>
        <div>
          <Link to='main'>{t('WONDERPALS')}</Link>
        </div>
        <div className={burger ? 'sub-menu active' : 'sub-menu'}>
          <Link
            onClick={() => setBurger(false)}
            to='portfolio'
            offset={-120}>
            {t('PORTFOLIO')}
          </Link>
          <Link
            onClick={() => setBurger(false)}
            to='our-services'
            offset={-80}>
            {t('SERVICES')}
          </Link>
          <Link
            onClick={() => setBurger(false)}
            to='news-letter'
            offset={-150}>
            {t('NEWS LETTER')}
          </Link>
          <Link
            onClick={() => setBurger(false)}
            to='team'
            offset={-120}>
            {t('TEAM')}
          </Link>
          <Link
            onClick={() => setBurger(false)}
            to='news'
            offset={-120}>
            {t('NEWS')}
          </Link>
          <p
            onClick={() => setLanguage(!language)}
            className='change-language'>
            {localStorage.getItem('i18nextLng')}
          </p>
          <div
            className={
              language ? 'language-container active' : 'language-container'
            }>
            <a
              onClick={() => changeLanguage('eng')}
              className={activeLanguage === 'eng' ? 'active' : null}>
              ENG
            </a>
            <a
              onClick={() => changeLanguage('ro')}
              className={activeLanguage === 'ro' ? 'active' : null}>
              RO
            </a>
            <a
              onClick={() => changeLanguage('ru')}
              className={activeLanguage === 'ru' ? 'active' : null}>
              RU
            </a>
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
