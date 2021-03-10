import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [fields, setFields] = useState(
    {
      name: {
        value: '',
        required: true,
      },
      email: {
        value: '',
        required: true,
      },
      phone: {
        value: '',
        required: false,
      },
      subject: {
        value: '',
        required: true,
      },
      message: {
        value: '',
        required: true,
      }
    }
  );

  const [isEmptyName, setIsEmptyName] = useState(false);
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmptySubject, setIsEmptySubject] = useState(false);
  const [isEmptyMessage, setIsEmptyMessage] = useState(false);

  const handleSubmit = () => {
    if (fields.name.value === '') setIsEmptyName(true);
    if (fields.email.value === '') setIsEmptyEmail(true);
    if (fields.subject.value === '') setIsEmptySubject(true);
    if (fields.message.value === '') setIsEmptyMessage(true);
  }

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: { ...fields[e.target.name], value: e.target.value } });
    if (e.target.name === 'name') setIsEmptyName(false);
    if (e.target.name === 'email') setIsEmptyEmail(false);
    if (e.target.name === 'subject') setIsEmptySubject(false);
    if (e.target.name === 'message') setIsEmptyMessage(false);
  }

  return (
    <div className="form-container">
      <div className="form">
        <p className="title">CONTACT FORM</p>

        <div className="form-group">
          <label>Your Name (required)</label>
          <input type="text" name="name" onChange={handleChange} value={fields.name.value} />
          {isEmptyName && <span style={{ color: 'red' }}>Your name is missing</span>}
        </div>
        <div className="form-group">
          <label>Your Email (required)</label>
          <input type="email" name="email" onChange={handleChange} value={fields.email.value} />
          {isEmptyEmail && <span style={{ color: 'red' }}>Email id is missing</span>}
        </div>
        <div className="form-group">
          <label>Your Phone</label>
          <input type="telphone" name="phone" onChange={handleChange} value={fields.phone.value} />
        </div>
        <div className="form-group">
          <label>Subject (required)</label>
          <input type="text" name="subject" onChange={handleChange} value={fields.subject.value} />
          {isEmptySubject && <span style={{ color: 'red' }}>Subject is missing</span>}
        </div>
        <div className="form-group">
          <label>Your Message (required)</label>
          <textarea name="message" onChange={handleChange} value={fields.message.value}></textarea>
          {isEmptyMessage && <span style={{ color: 'red' }}>Your message is missing</span>}
        </div>
        <button className="send" onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}

export default Form;