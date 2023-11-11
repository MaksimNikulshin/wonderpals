//Import styles
import 'styles/app/footer.scss'

//Import images
import instagramWhite from 'images/instagramWhite.svg'
import facebookWhite from 'images/facebookWhite.svg'
import youtubeWhite from 'images/youtubeWhite.svg'

export default function Footer() {
  return (
    <footer>
      <div className='title'>
          <p>WONDERPALS</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
  
          <p>
            © 2023 WONDERPALS. Work in progress.. <br />
            TERMS AND CONDITIONS / PRIVACY POLICY
          </p>
      </div>
      <div>
        <div className='container'>
          <div className='navigation'>
            <p>NAVIGATION</p>
            <a href=''>ABOUT</a>
            <a href=''>NEWS</a>
            <a href=''>SERVICES</a>
            <a href=''>FAQ</a>
            <a href=''>CONTACTS</a>
          </div>
          <div className='information'>
            <p>INFORMATION</p>
            <p>
              Columna Street 86, Chisinau MD-2001
              <br />
              <br />
              Monday-Friday: 09:00-18:00, Saturday: 09:00-14:00, Sunday: Day
              off.
            </p>
          </div>
        </div>
        <div className='media'>
          <p>Follow us on social media: {'=>'}</p>
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
