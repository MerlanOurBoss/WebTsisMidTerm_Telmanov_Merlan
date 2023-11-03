import React, { useState } from 'react';
import './Profile.css'

const initialUserInfo = {
  name: 'Merlan',
  bio: 'student',
};

const Profile = () => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const renderProfileEdit = () => {
    return (
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
        />
        <br />
        <label>About me: </label>
        <textarea
          name="bio"
          value={userInfo.bio}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleSaveProfile}>Save</button>
        <button onClick={handleCancelEdit}>Cancel</button>
      </div>
    );
  };

  const renderProfileView = () => {
    return (
      <div>
        <p>
          <strong>Name: </strong>
          {userInfo.name}
        </p>
        <p>
          <strong>About me: </strong>
          {userInfo.bio}
        </p>
        <button onClick={handleEditProfile}>Edit Profile</button>
      </div>
    );
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      {isEditing ? renderProfileEdit() : renderProfileView()}
    </div>
  );
};

export default Profile;
