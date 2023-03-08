import React, { useState } from 'react';

import '../styles/contact.css';
import { useDispatch } from 'react-redux';
import { contact } from '../actions/contactus';


const Conatct = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobNo, setMobNo] = useState('')
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const handleSubmit=(data)=>{
    dispatch(contact(data.name,data.email,data.mobNo,data.message))
    console.log(data.name,data.email,data.mobNo,data.message)
    
}


  const handleInputChange = (value, text) => {

    if (text === 'name') {
      setName(value)
    }
    if (text === 'email') {
      setEmail(value)
    }
    if (text === 'mob') {
      setMobNo(value)
    }
    if (text === 'message') {
      setMessage(value)
    }
  }

  return (


    <div className="contact-detail">
      <h1 className='text'>Conatct - US</h1>
      <form onSubmit={handleSubmit}>
        <div className="contact-input">
          <label htmlFor="name">Full Name</label>
          <input type="text" id='name' onChange={(e) => handleInputChange(e.target.value, 'name')} value={name} />
        </div>
        <div className="contact-input">
          <label htmlFor="email">Email</label>
          <input type="text" id='email' onChange={(e) => handleInputChange(e.target.value, 'email')} value={email} />
        </div>
        <div className="contact-input">
          <label htmlFor="mob">Mobile No.</label>
          <input type="text" id='mob' onChange={(e) => handleInputChange(e.target.value, 'mob')} value={mobNo} />
        </div>
        <div class="contact-textarea">
          <label htmlFor="message">Message: </label>
          <textarea name="message" id="message" cols="80" rows="5" onChange={(e) => handleInputChange(e.target.value, 'message')} value={message}></textarea>
         </div>
        <button type="submit">submit</button>
      </form>
    </div>


  );
};

export default Conatct;
