import React from 'react'
import './form.css'

function Form() {
  return (
    <div className='form-main'>
    <h1 className='reg-form-head'>Gym Membership Registration Form</h1>
    <div><i className="fa-regular fa-address-card fa-4x icon"></i></div>
    <p className='reg-form-p'>Fill out your information to become our Gym member</p>

    <form className="reg-form-container">
    <input className="inp-name" placeholder='First Name'></input>
      <input className="inp-name" placeholder='Last Name'></input><br/>
      <input className="inp-flds" placeholder='Mobile No.'></input> <br/>
      <input className="inp-flds" type='email' placeholder='Your Email'></input> <br/>
      <input className="inp-flds" placeholder='What is your Age'></input> <br/>

      <label className='inp-gen'>Gender : </label>
      <select id="gender" name="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select><br/><br/>


      <label className='label-jer'>Choose Your jersey colour: </label>
      <input id="col-selector" type="color"></input><br/><br/>
      <br/>
      <label className='label-sub'>Select Subscription :</label>
      <select id="plan" >
        <option value="Basic">Basic $10</option>
        <option value="Pro">Pro $30</option>
        <option value="Elite">Elite $50</option>
        <option value="Annual">Annual $200</option>
      </select><br/>
      <button className="submit-btn" type='submit'>Submit</button>
    </form>
    </  div>
)}

export default Form;