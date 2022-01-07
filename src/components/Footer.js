import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaTiktok} from 'react-icons/fa';

import '../styles/footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="soc-med-icons">
                <FaFacebookF className="facebook"/>
                <FaInstagram className="insta"/>
                <FaTwitter className="twitter"/>
                <FaTiktok className='tiktok'/>
           
            </div>
            <div className="copyright">
                <p> &copy; 2022 Created and Built by Carin Wood</p>
            </div>
        </div>
    )
}

export default Footer
