import React from 'react';

function Contact() {
  const contentBoxStyle = {
    fontFamily: 'Segoe UI',
  };

  return (
    <div className="landing_page">
      <div className="responsive-container-block big-container">
        <img className="bg-img" id="iq5bf" src="https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Background" />
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
            <div className="content-box" style={contentBoxStyle}>
              <p className="text-blk section-head">
                Simplify your Parking Experience
              </p>
              <p className="text-blk section-subhead">
                Book the best spaces and save time
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one" id="i1zj">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">
                  <a className="link" href=""></a>
                </p>
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-7">
                    <input className="input" id="ijowk-7" name="FirstName" placeholder="First Name" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i1ro7">
                    <input className="input" id="indfi-5" name="Last Name" placeholder="Last Name" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial" id="ityct">
                    <input className="input" id="ipmgh-7" name="Email" placeholder="Email" />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <input className="input" id="imgis-6" name="PhoneNumber" placeholder="Phone Number" />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-7">
                    <textarea aria-placeholder="Type message here" className="textinput" id="i5vyy-7" placeholder="Type message here"></textarea>
                  </div>
                </div>
                <button style={{cursor:'pointer'}} className="submit-btn">
                  <b>Submit</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
