//Import components
import Main from 'components/home/Main'
import Portfolio from 'components/home/Portfolio'
import OurServices from 'components/home/OurServices'
import NewsLetter from 'components/home/NewsLetter'
import Team from 'components/home/Team'
import News from 'components/home/News'
import Career from 'components/home/Career'

//Import styles
import 'styles/pages/home.scss'

export default function Home() {
  return (
    <section className='home'>
      <Main />
      <Portfolio />
      <OurServices />
      <NewsLetter />
      <Team />
      <Career />
      <News />
    </section>
  )
}
