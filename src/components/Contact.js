import React from 'react';
import './Contact.css'

const Contact = () => {
  return <div>
      <h1 className='heading'>Subscribe to get information, latest news and other <br/>interesting offers about Cobham</h1>
      <div className='cnt'>
          <form>

          <input name="email" type="text" class="feedback-input" placeholder="Your Email" />
          </form>
          <button className='btn'>Subscribe</button>
      </div>
  </div>;
};

export default Contact;
