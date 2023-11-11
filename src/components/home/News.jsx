//Import styles
import 'styles/components/home/news.scss'

//Import images
import newsImg from 'images/newsImg.png'

export default function News() {
  const Arr = [
    {
      id: 1,
      img: newsImg,
      title: 'Udazzy',
      subTitle: 'Stay in the know with the latest updates from our world. ',
      date: '28.11.2023',
    },
    {
      id: 2,
      img: newsImg,
      title: 'Udazzy',
      subTitle: 'Stay in the know with the latest updates from our world. ',
      date: '28.11.2023',
    },
    {
      id: 3,
      img: newsImg,
      title: 'Udazzy',
      subTitle: 'Stay in the know with the latest updates from our world. ',
      date: '28.11.2023',
    },
    {
      id: 4,
      img: newsImg,
      title: 'Udazzy',
      subTitle: 'Stay in the know with the latest updates from our world. ',
      date: '28.11.2023',
    },
    {
      id: 5,
      img: newsImg,
      title: 'Udazzy',
      subTitle: 'Stay in the know with the latest updates from our world. ',
      date: '28.11.2023',
    },
  ]

  return (
    <section className='news'>
      <div className='header'>
        <div>
          <h3>NEWS</h3>
          <p>Stay in the know with the latest updates from our world.</p>
        </div>
        <div className='more'>
          <p>
            More news {'=>'} <a>Read more</a>
          </p>
        </div>
      </div>
      <div className='content'>
        {Arr.slice(0, 3).map(item => (
          <div
            key={item.id}
            className='post'>
            <img
              src={item.img}
              alt='newsImg'
            />
            <div className='description'>
              <div className='title-news'>
                <p>{item.title}</p>
                <p>{item.date}</p>
              </div>
            <p>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
