import { useState } from 'react';
import './form.css';


import { toast } from 'react-toastify';

const countries = [
  { value: '', label: 'Select the Country' },
  { value: 'india', label: 'India' },
  { value: 'usa', label: 'USA' },
  { value: 'uk', label: 'UK' },
  { value: 'australia', label: 'Australia' }
];

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    gender: "male",
    agree: false,
    country: ""
  });

  const handleChange = (e) => {

    console.log(e.target.value)
    const { name, value, type, checked } = e.target;
    console.log(checked);
   
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };


  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!formData.agree || formData.country === "" || formData.firstName === "" || formData.lastName === "" || formData.email === "" || formData.mobileNo === "") {
        toast.error("Please fill all the required fields and agree to the terms.");
      return;
    }
    toast.success("Form submitted successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      gender: "male",
      agree: false,
      country: ""
    });
  };

  return (

    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form-title">Registration Form</h1>
      <div className="formData">
        <div className="form-group">
          <label>First Name</label>
          <input type="text"  name="firstName"  value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Mobile No.</label>
          <input type="tele"   name="mobileNo" maxLength={10} value={formData.mobileNo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange} />
              Male
            </label>
            <label>
              <input 
              type="radio"
               name="gender" 
               value="female" 
               checked={formData.gender === "female"} 
               onChange={handleChange} />
              Female</label>
          </div>
        </div>
        <div className="form-group">
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            {countries.map((c) => (
              <option key={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        <div className="form-group checkbox">
          <label>
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" className="form-button" >Submit</button>
      </div>
    </form>
  );
};

export default Form;


