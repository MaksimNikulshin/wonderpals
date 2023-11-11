//Import styles
import 'styles/components/home/ourServices.scss'

export default function OurServices() {
  return (
    <section className='our-services'>
      <div className='header'>
        <h3>All our services</h3>
        <p>
          Discover the breadth and depth of our offerings with our comprehensive
          range of services. From cutting-edge technology solutions to
          personalized consulting, we're here to meet all your needs.
        </p>
        <button>Read more</button>
      </div>
      <div className='content'>
        <div>
          <div className='services gray'>
            <p>Support Department</p>
            <p>
              Our dedicated support team is here to assist you every step of the
              way. Whether you have questions, encounter issues, or need
              guidance, our experts are ready to provide timely and reliable
              assistance.
            </p>
          </div>
          <div className='services blue'>
            <p>Marketing Department</p>
            <p>
              Our dynamic Marketing Department is the creative engine behind our
              brand's success. With a passion for innovation and a keen
              understanding of market trends, we craft compelling campaigns to
              captivate audiences and drive growth.
            </p>
          </div>
        </div>
        <div>
          <div className='services blue'>
            <p>Development Team</p>
            <p>
              Our highly skilled Development Team is the driving force behind
              our technological innovations. With a relentless pursuit of
              excellence, we turn ideas into reality, crafting cutting-edge
              solutions that shape the future.
            </p>
          </div>
          <div className='services gray'>
            <p>Design Team</p>
            <p>
              Our visionary Design Team is dedicated to transforming ideas into
              stunning visual experiences. With an eye for detail and a passion
              for aesthetics, we craft engaging designs that resonate with
              audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
