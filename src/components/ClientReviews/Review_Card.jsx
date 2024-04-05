import React from 'react'
import "./Review_Card.css"  


function Review_Card({stars_icon,review_desc,avatar_link}) {
  return (
    <div className='rev-Crd'>
      <div className='stars'>{stars_icon}</div>
      <p>{review_desc}</p>
      <div className='avatar-con'><img src={avatar_link}/></div>
    </div>
  )
}

export default Review_Card