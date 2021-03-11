import React, { useState } from "react";

const Profile = ({ user }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="profile">
      <div className="avatar">
        <img
          src={user.avatar}
          style={{ width: "250px", height: "300px" }}
          alt="avatar"
        />
      </div>
      <div className="detail-info">
        <p className="name">{user.name}</p>
        <p className="post">{user.post}</p>
        <p
          className={`detail ${isCollapsed && `collapsed`}`}
          dangerouslySetInnerHTML={{ __html: user.detail }}
        ></p>
        <a className="read-more" onClick={toggleCollapsed}>
          {isCollapsed ? <span>Read more</span> : <span>Less more</span>}
        </a>
      </div>
    </div>
  );
};

export default Profile;
