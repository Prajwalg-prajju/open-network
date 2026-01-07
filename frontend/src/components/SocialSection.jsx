import React from "react";

export default function SocialSection({ socials }) {
  if (!socials) return null;

  // Convert object → array if needed
  const socialArray = Array.isArray(socials)
    ? socials
    : Object.entries(socials)
        .filter(([, url]) => url) // only include non-empty
        .map(([platform, url]) => ({ platform, url }));

  return (
    <div className="info-card">
      <h3>Social Accounts</h3>
      {socialArray.length > 0 ? (
        <ul>
          {socialArray.map((social, i) => (
            <li key={i}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <span>No socials added</span>
      )}
    </div>
  );
}
