import './home.scss'
import Male from '../assets/male.png'
import Tex from '../assets/dd.png'
import WE from '../assets/wire.jpeg'


const Home = () => {
  return (
    <div className='home'>
        <div className="top">
            <div className="left">
                <span className='a'>A</span>
                <span className="shul">nshul<b>.</b></span>
            </div>
            <div className="right">
                <div className="links">
                <a className='link' href='#home'>Home</a>
                <a className='link' href='#home'>Work</a>
                <a className='link' href='#home'>Services</a>
                </div>
                <div className="button">
                    <button>Hire Me.</button>
                </div>
                
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="top1">
                    <div className="left2">
                <h2>Hi! I am </h2>
                <h2>Anshul Sharma</h2>
                    </div>
                <div className="left3">
                <span>Front-end</span>
                </div>
                </div>
                <div className="btn-mid">
                    <button className='hire'>Hire Me</button>
                    <button className='bt'>Projects ↗</button>
                </div>
                <div className="bottom1">
                    <div className="he1">
                    <h1>+84</h1>
                    <span className='sp'>clients on Upwork worldwide</span>
                    <h1>572</h1>
                    <span>Project Done</span>
                    <h1>Contact</h1>
                    <span>anshulamrahs@gmail.com</span>
                    </div>
                    <div className="he2">
                    <img className='persons' src={Male} alt="" />
                    
                    <img src={Tex} className='per' alt=''/>
    
        </div>
                    </div>
                </div>
            <div className="right">
                <img  className='dev' src={WE} alt></img>
            </div>
            </div>
        </div>
    
  )
}

export default Home