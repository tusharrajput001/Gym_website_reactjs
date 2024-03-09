import React from 'react'
import './contact.css'


function Contact() {
  return (
    <section className='contact-sec'>
    
        <h2 className='headingClass'  id='contact'>Contact</h2>
        <p className='desc'>Feel free to reach out to me for any question or opportunities!</p>
        
        
        <form action="https://api.web3forms.com/submit" method="POST" className='form-container' onSubmit='sendEmail()'>
            <h3>Email me 🚀</h3>
            <input type="hidden" name="access_key" value="34221a43-8daf-4c14-8ba0-aa1b1a2c3182"></input>
            <input className="input1" type="email" placeholder="Your E-mail" name="email" required/>
            <input className="input1" type="text" placeholder="Your Name" name="name" required/>
            <input className="input1" type="text" placeholder="Subject"/>
            <input className="msg-input" type="message" placeholder="Message" name="message" required/>
            <button className='send-btn' type='submit'>Send</button>    
        </form>
        
    </section>
  )
}

export default Contact