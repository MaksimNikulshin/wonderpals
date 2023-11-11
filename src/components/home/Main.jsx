//Import components

//Import styles
import 'styles/components/home/main.scss'

//Import images
import arrow from 'images/arrow.svg'

export default function Main() {
  return (
    <section className='main'>
      <div className='title'>
        <h2>WONDERPALS</h2>
        <h1>We specialize in trust and success.</h1>
      </div>
      <div className='container'>
        <p>scroll down</p>
        <img
          src={arrow}
          alt='arrow-icon'
        />
      </div>
    </section>
  )
}
