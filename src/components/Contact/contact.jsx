import React from 'react'
import './contact.css'


function Contact() {
  return (
    <>
    
        <h2 className='headingClass'  id='contact'>Contact</h2>
        <p className='desc'>Feel free to ask anything about us</p>
          
        <section className='contact-sec'>
      
            <form action="https://api.web3forms.com/submit" method="POST" className='form-container' onSubmit='sendEmail()'>
                <h3>For any Query 🚀</h3>
                <input type="hidden" name="access_key" value="34221a43-8daf-4c14-8ba0-aa1b1a2c3182"></input>
                <input className="input1" type="email" placeholder="Your E-mail" name="email" required/>
                <input className="input1" type="text" placeholder="Your Name" name="name" required/>
                <input className="input1" type="text" placeholder="Subject"/>
                <input className="msg-input" type="message" placeholder="Message" name="message" required/>
                <button className='send-btn' type='submit'>Send</button>    
            </form>
          
            {/* <iframe className="map-frame" width="40%" src="https://www.openstreetmap.org/export/embed.html?bbox=77.07065820693971%2C28.613741979484978%2C77.09898233413698%2C28.62986521930973&amp;layer=mapnik&amp;marker=28.6218039088934%2C77.08482027053833"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=28.6218&amp;mlon=77.0848#map=16/28.6218/77.0848&amp;layers=N"></a></small> */}
            <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=660&amp;height=900&amp;hl=en&amp;q=brix gym&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://strandsgame.net/">Strands</a></div></div>
        </section>
    
    
    </>

  )
}

export default Contact