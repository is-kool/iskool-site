import React from 'react';
import Profile from './Profile';
import './Profiles.css';

const Profiles = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="profiles">
          {
            data.map((user, index) => {
              return (
                <Profile key={index} user={user} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Profiles;