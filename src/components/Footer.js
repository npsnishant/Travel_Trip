import React from 'react';
import './Footer.css'
import instagram from './instagram.jpg'
import facebook from './facebook.jpg'
import playstore from './playstore.png'
import twitter from './twitter.jpg'

import apple from './apple.png'


const Footer = () => {
    return <div>
        <footer class="footer">
            <div class="footer__addr">
                <h1>Jadoo.</h1>
                <p>Book your trip in minute, get full <br/>control for much longer</p>
            </div>

            <ul class="footer__nav">
                <li class="nav__item">
                    <h2 class="nav__title">Company</h2>
                    <ul class="nav__ul">
                        <li>
                            <a href="#">About</a>
                        </li>

                        <li>
                            <a href="#">Careers</a>
                        </li>

                        <li>
                            <a href="#">Mobiles</a>
                        </li>
                    </ul>
                </li>
                <li class="nav__item">
                    <h2 class="nav__title">Contact</h2>
                    <ul class="nav__ul">
                        <li>
                            <a href="#">Help/FAQ</a>
                        </li>

                        <li>
                            <a href="#">Press</a>
                        </li>

                        <li>
                            <a href="#">Affilates</a>
                        </li>
                    </ul>
                </li>
                <li class="nav__item">
                    <h2 class="nav__title">More</h2>
                    <ul class="nav__ul">
                        <li>
                            <a href="#">Airlinefees</a>
                        </li>

                        <li>
                            <a href="#">Airline</a>
                        </li>

                        <li>
                            <a href="#">Low fare tips</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className='right'>
                <span><img className='imgs' src={facebook}/></span>
                <span><img className='imgs' src={instagram}/></span>
                <span><img className='imgs' src={twitter}/></span>
                <p>Discover our app</p>

               <div className='right-link'>
                <div className='right-cc'>
                        <img className="btn-pl1" src={playstore} height={17} width={17} />
                        <span className='demo'>Get it on <br/> GOOGLE PLAY</span>
                    </div>
                    <div className='right-cc'>
                        <img className="btn-pl2" src={apple} height={17} width={17}/>
                        <span className='demo'>Available on the <br/> APPLE STORE</span>
                    </div>
               </div>
            </div>
        </footer>
        <div class="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    </div>
    </div>;
};

export default Footer;
