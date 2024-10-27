import React from 'react'

import './footer.css'
import { Link } from 'react-router-dom'
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import visa from '../assets/visa.png'
import card from '../assets/mastercard.png'
import pay from '../assets/paypal.png'

const Footer = () => {
  return (
    <div>
    <footer className="footer">
        <div className="footer-left">
        
        <h3>Payment Method</h3>
             <div className="credit-cards">
             <img src={visa} alt="visa" />
                <img src={card} alt="mastercard" />
                <img src={pay} alt="paypal" />
            </div>
              
            
            <p className="footer-copyright">2021 Shops.</p>
        </div>

        <div className="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>India</span> Delhi</p>
            </div>
            <div>
                <i class="fa fa-phone"></i>
                <p>+62 077-777-77</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><Link to='/'>support@gmail.com</Link></p>
            </div>
            
        </div>

        <div className="footer-right">
            <p className="footer-about">
                <span>About</span>
                <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis totam corrupti 
                    laboriosam officia inventore amet aliquam voluptatum sed, sequi quis dolorem quo id nemo vel molestiae? Voluptas, unde praesentium.</strong>
            </p>

            <div className="footer-media">
                <Link href="#"><i class="fa-brands fa-instagram fa-lg"></i></Link>
                <Link href="#"><i class="fa-brands fa-facebook fa-lg"></i></Link>
                <Link href="#"><i class="fa-brands fa-x-twitter fa-lg"></i></Link>
                <Link href="#"><i class="fa-brands fa-youtube fa-lg"></i></Link>
              
            </div>
            
        </div>

    </footer>
      
    </div>
  )
}

export default Footer
