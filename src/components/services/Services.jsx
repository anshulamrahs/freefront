import './services.scss'
import Book from '../assets/sore.jpeg'
import Mark from '../assets/mark.jpeg'
import Strat from '../assets/strat.jpeg'

const Services = () => {
  return (
    <div className='service'>
        <h1 className='tex'>Services Offered</h1>
        <div className="serve">
        <div className="serviceCard">
            <img src={Book} className='img' alt='booking'/>
            <h1>Web Development</h1>
            <span>Full development Process from Planning to Deployment</span>
        </div>
        <div className="serviceCard">
            <img src={Mark} className='img' alt='booking'/>
            <h1>Digital Marketing</h1>
            <span>Full Seo and Digital marketing Strategies for your website</span>
        </div>
        <div className="serviceCard">
            <img src={Strat} className='img' alt='booking'/>
            <h1>Business Strategies</h1>
            <span>Strategies to grow your business from ground up</span>
        </div>
        </div>
    </div>
  )
}

export default Services