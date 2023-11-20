// Import components
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

// Import styles
import 'styles/app/footer.scss'

// Import images
import instagramWhite from 'images/instagramWhite.svg'
import facebookWhite from 'images/facebookWhite.svg'
import youtubeWhite from 'images/youtubeWhite.svg'

export default function Footer() {
  //Initialization state manager
  const { t } = useTranslation()

  return (
    <footer>
      <div className='title'>
        <p>WONDERPALS</p>
        <p>
          {t(
            'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.'
          )}
        </p>

        <p>
          © 2023 'WONDERPALS. {t('Work in progress..')}
          <br />
          {t('TERMS AND CONDITIONS / PRIVACY POLICY')}
        </p>
      </div>
      <div>
        <div className='container'>
          <div className='navigation'>
            <p>{t('NAVIGATION')}</p>
            <Link to='portfolio'>{t('PORTFOLIO')}</Link>
            <Link to='our-services'>{t('SERVICES')}</Link>
            <Link to='news-letter'>{t('NEWS LETTER')}</Link>
            <Link to='team'>{t('TEAM')}</Link>
            <Link to='news'>{t('NEWS')}</Link>
          </div>
          <div className='information'>
            <p>{t('INFORMATION')}</p>
            <p>
              {t('Columna Street 86, Chisinau MD-2001')}
              <br />
              <br />
              {t('Monday-Friday: 09:00-18:00')}
              <br />
              {t('Saturday: 09:00-14:00')}
              <br />
              {t('Sunday: Day off.')}
            </p>
          </div>
        </div>
        <div className='media'>
          <p>{t('Follow us on social media')}:</p>
          <div className='icons'>
            <span>
              <img
                src={instagramWhite}
                alt='social-icon'
              />
            </span>
            <span>
              <img
                src={facebookWhite}
                alt='social-icon'
              />
            </span>
            <span>
              <img
                src={youtubeWhite}
                alt='social-icon'
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
