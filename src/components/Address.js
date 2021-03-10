import React from 'react';
import './Address.css';

const Address = ({ data }) => {
  return (
    <>
      <div className="container">
        <div>
          {
            data.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <p>{item.name}</p>
                  <p>{item.address}</p>
                  <p>{item.phone}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Address;