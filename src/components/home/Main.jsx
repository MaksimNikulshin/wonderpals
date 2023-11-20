//Import components
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

//Import styles
import 'styles/components/home/main.scss'

//Import images
import arrow from 'images/arrow.svg'

export default function Main() {
  const { t } = useTranslation()

  return (
    <section id='main'>
      <div className='title'>
        <h2>WONDERPALS</h2>
        <h1>{t('subTitleMain')}</h1>
      </div>
      <Link
        to='portfolio'
        className='container'>
        <p>{t('scroll down')}</p>
        <img
          src={arrow}
          alt='arrow-icon'
        />
      </Link>
    </section>
  )
}
