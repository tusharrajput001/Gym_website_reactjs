import React from 'react'
import "./trcard.css"


function Trcard({tr_img,tr_name,tr_title,tr_unv}) {
  return (
    <>
        <div className='card-cntr'>
            
            <img src={tr_img} alt="" className='card-imga'/>
            <h1>{tr_name}</h1>
            <p className="tr-title">{tr_title}</p>
            <p>{tr_unv}</p>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <p><button>Contact</button></p>
                           
        </div>
    </>
  )
}

export default Trcard;