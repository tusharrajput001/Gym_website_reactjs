import React from 'react'
import './memCard.css'
import { Link } from 'react-router-dom'

function MemCard({plan_name,plan_desc,price,f1,f2,f3}) {
  return (
    <div className='memb-card'>

        <div className='card-layout'>
            <h1>{plan_name}</h1>
            <p>{plan_desc}</p>
            <h2>{price}</h2>
            <a className='mem-ico'><i className="fa-solid fa-circle-check"></i>  {f1}</a><br/>
            <a className='mem-ico'><i className="fa-solid fa-circle-check"></i>  {f2}</a><br/>
            <a className='mem-ico'><i className="fa-solid fa-circle-check"></i>  {f3}</a>

        </div>
        
        <div className='memb-btn'>
            <Link to="/Form" > <button>Select Plan</button> </Link>
        </div>


        
    </div>
  )
}

export default MemCard