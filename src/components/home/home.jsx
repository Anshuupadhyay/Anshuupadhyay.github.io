import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import resume from '../props/Resume-Anshu-Upadhyay.pdf'
function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show active'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img  src={img} alt=' ' />
      </div>
      <div className='resume'>
<a target='_blank' href='https://drive.google.com/file/d/1O3a9jhH0kr7rpQZs5_mo4lQLi_eq0kw6/view?usp=sharing'>My Resume</a>
 
  </div>
      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
       
        <p >
        A programmer, expertise in web-development (end-to-end). It has been over an year since I have been developing websites and web applications.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
