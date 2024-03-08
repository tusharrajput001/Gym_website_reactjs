import React from 'react'
import "./expcard.css"


function Expcard({cardImg,cardTitle}) {
  return (
    <div className='card-strip'>
        <div>
            <img className='card-img'src={cardImg}/>
            <div className='v-line'>.</div>
            <div className='card-head'>{cardTitle}</div>
        </div>
    </div>
  )
}

export default Expcard