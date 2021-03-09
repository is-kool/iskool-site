import React from 'react';
import './Profiles.css';

const Profiles = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="profiles">
          {
            data.map((user, index) => {
              return (
                <div className="profile" key={index}>
                  <div className="avatar">
                    <img src={user.avatar} alt="avatar" />
                  </div>
                  <div class="detail-info">
                    <p className="name">{user.name}</p>
                    <p className="post">{user.post}</p>
                    <p className="detail" dangerouslySetInnerHTML={{ __html: user.detail }}></p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Profiles;