import React, { useRef, useEffect, useState } from 'react';
import './form.css';

function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const _submitForm = (e) => {
    e.preventDefault();
    alert('Form Submitted');
    console.log(formData);
  };

  const [formData, setFormData] = useState({
    fname: '',
    mobile: '',
    email: '',
    age: '',
    gender: 'Male',
    color: 'Yellow',
    subscription: 'Basic',
  });

  return (
    <div ref={ref} className={`form-cover ${isVisible ? 'loaded' : ''}`}>
      <div className="form-main">
        <h1 className="reg-form-head">Gym Membership Registration Form</h1>
        <div>
          <i className="fa-regular fa-address-card fa-4x icon"></i>
        </div>
        <p className="reg-form-p">
          Fill out your information to become our Gym member
        </p>

        <form className="reg-form-container">
          <input
            className="inp-name"
            placeholder="Full Name"
            name="fname"
            onChange={handleChange}
          ></input>
          <br />
          <input
            className="inp-flds"
            placeholder="Mobile No."
            name="mobile"
            onChange={handleChange}
          ></input>{' '}
          <br />
          <input
            className="inp-flds"
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
          ></input>{' '}
          <br />
          <input
            className="inp-flds"
            placeholder="What is your Age"
            name="age"
            onChange={handleChange}
          ></input>{' '}
          <br />
          <label className="inp-gen">Gender : </label>
          <select id="gender" name="gender" onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
          <label className="label-jer">Choose Your jersey colour: </label>
          <input
            id="col-selector"
            type="color"
            name="color"
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <br />
          <label className="label-sub">Select Subscription :</label>
          <select id="plan" name="subscription" onChange={handleChange}>
            <option value="Basic">Basic $10</option>
            <option value="Pro">Pro $30</option>
            <option value="Elite">Elite $50</option>
            <option value="Annual">Annual $200</option>
          </select>
          <br />
          <button className="submit-btn" type="submit" onClick={_submitForm}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
