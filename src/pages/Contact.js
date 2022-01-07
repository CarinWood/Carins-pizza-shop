import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='left-contact'></div>
            <div className='right-contact'>
                <h1 className='contact-header'>Contact Us</h1>

                <form id="contact-form" metod="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text"></input>

                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email"></input>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Enter message..." type="message"></textarea>
                    
                    <button className="send-btn" type="submit">Send</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact
