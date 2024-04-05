import React from 'react'
import "./ClientReviews.css"
import Review_Card from './Review_Card'


function ClientReviews() {
  return (
    <div className='bg-rev'>
    <div className='reviews-container'>
        <Review_Card stars_icon= {<i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"></i></i></i></i></i>} review_desc= {"6 months after joining I lost 7kg and I'm getting stronger and getting more Positivity in Lifestyle"} avatar_link = {"https://xsgames.co/randomusers/avatar.php?g=male"}/>
        <Review_Card stars_icon= {<i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"></i></i></i></i></i>} review_desc= {"I've gotten so much stronger after joining It's insane. My Deadlift increased to 50kgs."} avatar_link = {"https://xsgames.co/randomusers/avatar.php?g=female"}/>
        <Review_Card stars_icon= {<i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"><i class="fa-solid fa-star"></i></i></i></i></i>} review_desc= {"While I am passionate about health and Fitness this Gym is more like a community to me than anything!"} avatar_link = {"https://xsgames.co/randomusers/avatar.php?g=pixel"}/>
    </div>
    </div>
  )

}

export default ClientReviews