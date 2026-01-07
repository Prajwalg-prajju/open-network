import React from "react";
import { API_BASE_URL } from "../services/apiConfig";

export default function ProfileAgeAndGender({
  name,
  bio,
  profileUrl,
  gender,
  birthYear
}) {
  return (
    <div className="profile-info">
      <img
        className="profile-image-avatar"
        src={profileUrl ? `${API_BASE_URL}${profileUrl}` : "/default-avatar.png"}
        alt={name}
      />

      <div className="profile-text">
        <h2>{name}</h2>
        {birthYear && (
          <span>
            {new Date().getFullYear() - birthYear} Y • {gender}
          </span>
        )}
        <p>{bio}</p>
      </div>
    </div>
  );
}
