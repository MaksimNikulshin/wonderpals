// Import components
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../app/Modal';
import { useTranslation } from 'react-i18next';

// Import styles
import 'styles/components/home/career.scss';

export default function Career() {
  // Initialization state manager
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  // Initialization form manager
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  // Function onSubmit
  const onSubmit = () => {
    setActive(false);
  };

  return (
    <section id='career'>
      <div className='container'>
        <p>{t('CAREER')}</p>
        <p>
          {t(
            'Subscribe to our newsletter and unlock a world of exclusive content, insights, and updates delivered directly to your inbox. Stay ahead of the curve with our curated information, special offers, and industry news.'
          )}
        </p>
      </div>
      <button onClick={() => setActive(true)}>{t('Subscribe')}</button>
      <Modal active={active} setActive={setActive}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>{t('Name')}</p>
            <input type='text' placeholder={t('Name')} />
          </label>
          <label>
            <p>{t('Email')}</p>
            <input type='text' placeholder={t('Email')} />
          </label>
          <label>
            <p>{t('Phone')}</p>
            <input type='text' placeholder={t('Phone')} />
          </label>
          <label>
            <p>{t('Resume')}</p>
            <input type='file' placeholder={t('Resume')} />
          </label>
          <input type='submit' value={t('Submit')} className='button' />
        </form>
      </Modal>
    </section>
  );
}
