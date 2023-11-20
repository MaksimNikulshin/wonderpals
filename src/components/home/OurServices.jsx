//Import components
import { useTranslation } from 'react-i18next'

//Import styles
import 'styles/components/home/ourServices.scss'

export default function OurServices() {
  const { t } = useTranslation()

  return (
    <section id='our-services'>
      <div className='header'>
        <h3>{t('All our services')}</h3>
        <p>{t('subTitleServices')}</p>
      </div>
      <div className='content'>
        <div>
          <div className='services gray'>
            <p>{t('Support Department')}</p>
            <p>{t('subTitleSupport')}</p>
          </div>
          <div className='services blue'>
            <p>{t('Marketing Department')}</p>
            <p>{t('subTitleMarketing')}</p>
          </div>
        </div>
        <div>
          <div className='services blue'>
            <p>{t('Development Team')}</p>
            <p>{t('subTitleDevelopment')}</p>
          </div>
          <div className='services gray'>
            <p>{t('Design Team')}</p>
            <p>{t('subTitleDesign')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
