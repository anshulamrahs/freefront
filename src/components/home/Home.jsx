import './home.scss'

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
                <div className="l1">
                <h2>Hi! I am </h2>
                <h2>Anshul Sharma</h2>
                <div className="bt">Frontend</div>
                </div>
                <div className="btn">
                    <button>Hire Me</button>
                    <button>Projects</button>
                </div>
                <div className="he">
                    <h1>84</h1>
                    <span>clients worldwide</span>
                    <h1>84</h1>
                    <span>clients worldwide</span>
                    <h1>84</h1>
                    <span>clients worldwide</span>
                </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Home