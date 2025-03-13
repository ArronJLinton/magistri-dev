

import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="it-contact__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="it-contact__location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146513.05509247648!2d73.19133525789097!3d54.98596156928781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafde2f601090b%3A0x5eefc33861a69b1a!2z4KaT4Kau4Ka44KeN4KaVLCBPbXNrIE9ibGFzdCwg4Kaw4Ka-4Ka24Ka_4Kav4Ka84Ka-!5e0!3m2!1sbn!2sbd!4v1689181288902!5m2!1sbn!2sbd" width="600" height="450" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-contact__right-box">
                <div className="it-contact__section-box pb-20">
                  <h4 className="it-section-title pb-15">Get in Touch</h4>
                  <p>A vast majority of the app marketers mainly concent  post-launch app marketing techniques and measures while completely missing pre-launch campaign. This prevents the </p>
                </div>
                <div className="it-contact__content">
                  <h5>Contact Info</h5>
                  <ul>
                    <li>
                      <div className="it-contact__list">
                        <span>Address</span>
                        <a href="#">254, North City, Bulex Center, New York</a>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list">
                        <span>Phone</span>
                        <a href="tel:09354587874">09 (354) 587 874  or  10 (698) 852 741</a>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list">
                        <span>Email</span>
                        <a href="mailto:info@example.com">info@example.com  or  info@example.com</a>
                      </div>
                    </li>
                  </ul>
                  <a href="mailto:www.example.com">www.example.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;