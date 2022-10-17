import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="FooterContainer">
            <div className="leftSideContainer">
              <div className="first">
                <h3>Categories</h3>
                <p>About Us</p>
                <p>Testimonials</p>
                <p>Contact</p>
                <p>Journal</p>
                <p>Privacy Policy</p>
              </div>
              <div className="second">
                <h3>Partners</h3>
                <p>Support</p>
                <p>Shipping and Returns</p>
                <p>Size Guide</p>
                <p>Product Care</p>
              </div>
              <div className="third">
                <h3>Contact Us</h3>
                <p>
                  26A, Pagoda St. TANGS, <br /> Singapore, 058176
                </p>
                <p>+65 845 2784</p>
              </div>
              <div className="fourth">
                <h3>Subscribe to newsletter</h3>
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="email"
                  />
                  <button>SUBSCRIBE</button>
                </form>
              </div>
            </div>
            <div className="copyRightMark">© Copyright Matter PTE LTD 2017</div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
