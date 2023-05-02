import './projects.scss'
import Boo from '../assets/book.png'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="cards">
            <div className="card">
                <img className='img' src={Boo}/>
                <h1>Booking App Clone</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias.</span>
            </div>
            <div className="card">
                <img className='img' src={Boo}/>
                <h1>Booking App Clone</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias.</span>
            </div>
            <div className="card">
                <img className='img' src={Boo}/>
                <h1>Booking App Clone</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias.</span>
            </div>
        </div>
    </div>
  )
}

export default Projects