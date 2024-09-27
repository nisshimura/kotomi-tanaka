import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [profileText, setProfileText] = useState("");

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/text/profile.txt`)
      .then((response) => response.text())
      .then((data) => setProfileText(data));
  }, []);

  return (
    <div className="profile">
      <img
        src={`${process.env.PUBLIC_URL}/data/images/profile/face.jpg`}
        alt="プロフィール写真"
      />
      <h1>田中湖都美</h1>
      <p>{profileText}</p>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/tanaka__kotomi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/data/images/profile/instagram_icon.png`}
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
}

export default Profile;
