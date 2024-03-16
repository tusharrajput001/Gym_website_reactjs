import React from 'react'
import './form.css'

function Form() {
  return (
    <>
    <h1 className='reg-form-head'>Gym Membership Registration Form</h1>
    <div><i className="fa-regular fa-address-card fa-4x icon"></i></div>
    <p className='reg-form-p'>Fill out your information to become our Gym member</p>

    <form className="reg-form-container">
    <input className="inp-name" placeholder='First Name'></input>
      <input className="inp-name" placeholder='Last Name'></input>
    
      <br/>
      <input className="inp-flds" placeholder='Mobile No.'></input> <br/>
      <input className="inp-flds" type='email' placeholder='Your Email'></input> <br/>
      <input className="inp-flds" placeholder='What is your Age'></input> <br/>
      <label className='inp-gen'>What is your gender ?</label><br/>
      <input type='radio' id='female' name='gender'></input>
      <label for="female">Female</label>
      <input type='radio' id='male' name='gender'></input>
      <label for='male'>Male</label>
      <input type='radio' id='other' name='gender'></input>
      <label for='other'>Other</label><br/>
      <label>Choose Your jersy colour: </label>
      <input type="color"></input>
      <br/>
      <label>Select Subscription :</label><br/>
      <select id="cars" name="cars">
        <option value="Basic">Basic $10</option>
        <option value="Pro">Pro $30</option>
        <option value="Elite">Elite $50</option>
        <option value="Annual">Annual $200</option>
      </select>
    </form>
    </>
)}

export default Form;