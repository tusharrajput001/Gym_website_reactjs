import React from 'react'
import './membership.css'
import MemCard from './memCard'


function Membership() {
  return (
    <>
    {/* WAVES UP */}
    <div className='waves2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#D6C7AE" fill-opacity="1022222.22" d="M0,192L60,197.3C120,203,240,213,360,224C480,235,600,245,720,218.7C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>


    <div className='mem-head'>
        Membership
    </div>

    {/* WAVES DOWN */}
    <div className='waves'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#D6C7AE" fill-opacity="1" d="M0,192L11.4,186.7C22.9,181,46,171,69,160C91.4,149,114,139,137,122.7C160,107,183,85,206,90.7C228.6,96,251,128,274,149.3C297.1,171,320,181,343,165.3C365.7,149,389,107,411,85.3C434.3,64,457,64,480,58.7C502.9,53,526,43,549,69.3C571.4,96,594,160,617,170.7C640,181,663,139,686,106.7C708.6,75,731,53,754,64C777.1,75,800,117,823,160C845.7,203,869,245,891,240C914.3,235,937,181,960,154.7C982.9,128,1006,128,1029,112C1051.4,96,1074,64,1097,80C1120,96,1143,160,1166,181.3C1188.6,203,1211,181,1234,154.7C1257.1,128,1280,96,1303,69.3C1325.7,43,1349,21,1371,64C1394.3,107,1417,213,1429,266.7L1440,320L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
      </svg> 
    </div> 


    <div className='mem-con red'>
        <MemCard plan_name={"BASIC"} plan_desc={"A basic and affordable plan."} price={"$10/m"} f1={"Free outfit"} f2={"Personal Trainer"} f3={"Unlimited access"} />
        <MemCard plan_name={"PRO"} plan_desc={"Pro plan for Professionals."} price={"$30/m"} f1={"Include all basic plan"} f2={"Free Meals  "} f3={"Free online workouts"} />
        <MemCard plan_name={"ELITE"} plan_desc={"Elite plan for Gymrats."} price={"$50/m"} f1={"Include all Pro plan"} f2={"VIP access"} f3={"Sports complex access"} />
    </div>   

    
    </>


  )
}

export default Membership