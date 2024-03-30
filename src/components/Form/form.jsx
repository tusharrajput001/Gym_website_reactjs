import React,{useState} from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    age: "",
    gender: "",
    color: "",
    subscription: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const _submitForm = (e) => {
    e.preventDefault();
    alert("Form Submitted")
    console.log(formData);
  }
 





  return (
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
          placeholder="First Name"
          onChange={handleChange}
        ></input>
        <input
          className="inp-name"
          placeholder="Last Name"
          onChange={handleChange}
        ></input>
        <br />
        <input
          className="inp-flds"
          placeholder="Mobile No."
          onChange={handleChange}
        ></input>{" "}
        <br />
        <input
          className="inp-flds"
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
        ></input>{" "}
        <br />
        <input
          className="inp-flds"
          placeholder="What is your Age"
          onChange={handleChange}
        ></input>{" "}
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
        <input id="col-selector" type="color" onChange={handleChange}></input>
        <br />
        <br />
        <br />
        <label className="label-sub">Select Subscription :</label>
        <select id="plan" onChange={handleChange}>
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
  );
}

export default Form;
