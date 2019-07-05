import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App-landing">
      <header className="App-header">
        <img src="/me2.jpg" className="App-dp" alt="Profile Pic" width="100" />
        <h1>Feranmi Akinlade</h1>
        <small>Web Developer</small>
      </header>
      
      <section>
        <h2>Grow your business with a professional website.</h2>
        <p>
          Contact me at &nbsp; 
          <a href="mailto:feranmiakinlade@gmail.com" id="mail-addy">
            feranmiakinlade@gmail.com
          </a>.<br />
          I look forward to working with you.
        </p>
      </section>
      
      <footer>
        <address>
          <button className="contact-icons" id="contact-whatsapp"
                  onClick={()=>showContactInfo('contact-whatsapp')}
                  onBlur={()=>hideContactInfo('contact-whatsapp')}
                >
            <img src="/icons/whatsapp.png" alt="WhatsApp Contact" />
            <div className="contact-info-display">
              <a href="tel:+2348179925186" aria-live="polite"
                 onFocus={()=>skipHide = true}
                 onBlur={()=>hideContactInfo('contact-whatsapp')}>
                0817 992 5186
              </a>
              <img src="/icons/close.png" alt=""
                   className="footer-icons"
                   onClick={()=>hideContactInfo('contact-whatsapp')} />
            </div>
          </button>
          
          <button className="contact-icons" id="contact-email"
                  onClick={()=>showContactInfo('contact-email')}
                  onBlur={()=>hideContactInfo('contact-email')}
                >
            <img src="/icons/email.png" alt="eMail Contact" />
            <div className="contact-info-display">
              <a href="mailto:feranmiakinlade@gmail.com" aria-live="polite"
                 onFocus={()=>skipHide = true}
                 onBlur={()=>hideContactInfo('contact-email')}>
                feranmiakinlade@gmail.com</a>
              <img src="/icons/close.png" alt="" 
                   className="footer-icons"
                   onClick={()=>hideContactInfo('contact-email')} />
            </div>
          </button>
          
          <button className="contact-icons" id="contact-sms"
                  onClick={()=>showContactInfo('contact-sms')}
                  onBlur={()=>hideContactInfo('contact-sms')}
                >
            <img src="/icons/gsm.png" alt="SMS Contact" />
            <div className="contact-info-display">
              <a href="tel:+2348179925186" aria-live="polite"
                 onFocus={()=>skipHide = true}
                 onBlur={()=>hideContactInfo('contact-sms')}>
                0817 992 5186</a>
              <img src="/icons/close.png" alt=""
                   className="footer-icons"
                   onClick={()=>hideContactInfo('contact-sms')} />
            </div>
          </button>

          <a id="twitter-icon" href="https://twitter.com/stactech"
             className="contact-icons"
             target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.png" alt="Twitter handle" />
          </a>

          <a href="https://www.linkedin.com/in/akinlade-feranmi-0b6bbb170"
             id="linkedin-icon" className="contact-icons"
             target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn Profile" />
          </a>
        </address>
      </footer>
    </div>
  );
}
//aria-live="assertive"

/**If the contactInfo link recieves focus,
 * set this to true in <a onFocus={...}>
 * to prevent hiding the contact-info-display container in <button onBlur={...}>
 * @var skipHide boolean.
*/
var skipHide = false;

function showContactInfo(btnId) {
  let contactInfo = document.querySelector(`#${btnId} > .contact-info-display`);
  contactInfo.style.display = 'flex';
}

function hideContactInfo(btnId) {
  setTimeout(() => {
    if (skipHide) return skipHide = false;
    document
      .querySelector(`#${btnId} > .contact-info-display`)
      .style.display = 'none';
  }, 1); //Wait a tick to allow setting skipHide if needed. (contact-info-display > a onFocus())
}

export default App;
