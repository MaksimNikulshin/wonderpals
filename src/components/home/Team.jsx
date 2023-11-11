//Import styles
import 'styles/components/home/team.scss'

//Import images
import team from 'images/team.png'
import youtube from 'images/youtube.svg'
import vk from 'images/vk.svg'
import facebook from 'images/facebook.svg'
import telegram from 'images/telegram.svg'
import instagram from 'images/instagram.svg'

export default function Team() {
  return (
    <section className='team'>
      <div className='header'>
        <h3>TEAM</h3>
        <p>
          Our team is the heartbeat of our organization. Comprising dedicated
          professionals from diverse backgrounds, we collaborate seamlessly to
          achieve excellence in everything we do.
        </p>
        <button>Read more</button>
      </div>
      <div className='content'>
        <img
          src={team}
          alt='team'
        />
        <div className='social'>
          <span>
            <img
              src={youtube}
              alt='icon'
            />
          </span>
          <span>
            <img
              src={vk}
              alt='icon'
            />
          </span>
          <span>
            <img
              src={facebook}
              alt='icon'
            />
          </span>
          <span>
            <img
              src={telegram}
              alt='icon'
            />
          </span>
          <span>
            <img
              src={instagram}
              alt='icon'
            />
          </span>
        </div>
      </div>
    </section>
  )
}
