import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="form">
        <p className="title">CONTACT FORM</p>

        <div className="form-group">
          <label>Your Name (required)</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Your Email (required)</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Your Phone (required)</label>
          <input type="telphone" />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Your Message</label>
          <textarea></textarea>
        </div>
        <button className="send">Send</button>
      </div>
    </div>
  )
}

export default Form;