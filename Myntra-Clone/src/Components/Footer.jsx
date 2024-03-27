import "bootstrap/dist/css/bootstrap.min.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
      return <>
            <footer>
                  <div className="footer_container mt-5">
                        <div className="footer_column">
                              <h3>ONLINE SHOPPING</h3>

                              <a href="#">Men</a>
                              <a href="#">Women</a>
                              <a href="#">Kids</a>
                              <a href="#">Home & Living</a>
                              <a href="#">Beauty</a>
                              <a href="#">Gift Card</a>
                              <a href="#">Myntra Insider</a>
                        </div>

                        <div className="footer_column">
                              <h3>CUSTOMER POLICIES</h3>

                              <a href="#">Contact Us</a>
                              <a href="#">FAQ</a>
                              <a href="#">T&C</a>
                              <a href="#">Terms Of Use</a>
                              <a href="#">Tract Orders</a>
                              <a href="#">Shipping</a>
                              <a href="#">Cancellation</a>
                              <a href="#">Returns</a>
                              <a href="#">Privacy Policy</a>
                        </div>

                        <div className="footer_column">
                              <h3>USEFUL LINKS</h3>

                              <a href="#">Blog</a>
                              <a href="#">Careers</a>
                              <a href="#">Site Map</a>
                              <a href="#">Corporate Information</a>
                              <a href="#">Whitehat</a>
                              <a href="#">Cleartrip</a>
                        </div>
                        <div className="footer_column">
                              <h3>EXPERIENCE MYNTRA</h3>
                              <img width={180} src="https://www.pngkey.com/png/detail/9-94519_app-store-google-play-png-available-on-the.png" alt="App Store Google Play Png - Available On The App Store@pngkey.com" />
                              <h3 className="mt-4">KEEP IN TOUCH</h3>
                              <div className="d-flex justify-content-between">
                                    <FaFacebook size={30}/>
                                    <FaTwitter size={30} />
                                    <FaYoutube size={30} />
                                    <AiFillInstagram size={30}/>
                              </div>
                        </div>
                  </div>
                  <hr />

                  <div className="copyright text-center">
                        © 2023 www.myntra.com. All rights reserved.
                  </div>
            </footer>
      </>
}
export default Footer;