import './index.css';
const About = ()=>{
    return(
        <div className='all'>
            <h1>Weather Focus App</h1>
            <div className='navbar'>
            <div>
            <h2>Rayn</h2>
            </div>
            <div>
            <input type='text' placeholder='Enter city name....'/>
            </div>
            <img src='./images/search.png' className='icons'></img>
            <img src='./images/menu.jpg' className='icons1'></img>
            </div>
            <div className='landingpage'>
                <img src='./images/landing page.jpeg'></img>
            </div>
            
        </div>
    )
}
export default About;