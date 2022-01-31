import React from 'react';
import image from './play.png';
// import satellite-dish from './satellite-dish.png';
import satellite from './satellite.png';
import airplane from './airplane.png';
import microphone from './microphone.png';
import setting from './setting.png';
import Italy from './Italy.jpg';
import London from './London.jpg';
import Europe from './Europe.jpg';
import Sentmail from './sent-mail.png';
import Smcard from './Smcard';
import './About.css'


const About = () => {
  return <div className='about'>
    <h3 className='intro'>BEST DESTINATIONS AROUND THE WORLD</h3>
    <h1 className='head'>Travel, enjoy <br /> and live a new <br />and full life</h1>
    <p className='desc'>Built Wicket longer admire do barton vanity itself do in it. <br />Preferred to sportsmen it engrossed listening.<br />
      Park gate sell they west hard for the.
    </p>

    <div className='btn-clk'>
      <button className='btn'>Find out more</button>
      <img className="btn-pl" src={image} height={60} width={60} />
      <span className='demo'>Play Demo</span>
    </div>

    <h3 className='cat'>CATEGORY</h3>
    <h1 className='cat-head'>We Offer Best Services</h1>


    {/* category section */}
    <div className='categories'>
    <div className='sub-cat'>
        <img className="" src={satellite} height={80} width={80} />
        <p className='pp' >Calculated Weather</p>
        <p>Built Wicket longer admire do barton vanity itself do in it.</p>
      </div>
      <div className='sub-cat'>
        <img className="" src={airplane} height={80} width={80} />
        <p className='pp'>Best Flights</p>
        <p>Engrossed listening. Park gate sell they west hard for the.</p>
      </div>
      <div className='sub-cat'>
        <img className="" src={microphone} height={80} width={80} />
        <p className='pp'>Local Events</p>
        <p>Barton vanity itself do in it. Prefered to men it engrossed listening.</p>
      </div>
      <div className='sub-cat'>
        <img className="" src={setting} height={80} width={80} />
        <p className='pp'>Customization</p>
        <p>We deliver outsourced avoation services for miliatary customers.</p>
      </div>
    </div>


  {/* destinations section */}

  <div className='dest-title'>
    <h3>Top Selling</h3>
    <h1>Top Destinations</h1>
  </div>

  <div className='dest-card'>
    <div className='cards'>
      <img className="img-place" src={Italy} />
      <div className='dest-desc'>
        <span>Rome, Italy</span>
        <span>$5,42k</span>
      </div>
      <div className='dest-end'>
      <img className="" src={Sentmail} height={25} width={25} />
      <span>10 Days Trip</span>
      </div>
    </div>

    <div className='cards'>
      <img className="img-place" src={London} />
      <div className='dest-desc'>
        <span>Rome, Italy</span>
        <span>$5,42k</span>
      </div>
      <div className='dest-end'>
      <img className="" src={Sentmail} height={25} width={25} />
      <span>10 Days Trip</span>
      </div>
    </div> <div className='cards'>
      <img className="img-place" src={Europe} />
      <div className='dest-desc'>
        <span>Rome, Italy</span>
        <span>$5,42k</span>
      </div>
      <div className='dest-end'>
      <img className="" src={Sentmail} height={25} width={25} />
      <span>10 Days Trip</span>
      </div>
    </div>
  </div>
  </div>;
};

export default About;
