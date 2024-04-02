import React from 'react'
import "./trcard.css"


function Trcard({tr_img,tr_name,tr_title,tr_unv,tr_ig,tr_fb}) {
  return (
    <>
        <div className='card-cntr'>
            
            <img src={tr_img} alt="" className='card-imga' loading='lazy'/>
            <h1>{tr_name}</h1>
            <p className="tr-title">{tr_title}</p>
            <p>{tr_unv}</p>
            <a href={tr_ig}><i className="fab fa-instagram fa-fw tr-icons"></i></a>
            <a href={tr_fb}><i className="fab fa-facebook fa-fw tr-icons"></i></a>
          
                           
        </div>
    </>
  )
}

export default Trcard;