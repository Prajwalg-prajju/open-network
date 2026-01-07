import React from "react";
import ProfileHeader from "./ProfileHeader";
import CoverImage from "./CoverImage";
import ProfileImage from "./ProfileImage";
import ProfileAgeAndGender from "./ProfileAgeAndGender";
import BasicInfo from "./BasicInfo";
import StatusSection from "./StatusSection";
import SelectedLanguage from "./SelectedLanguages";
import CustomLinks from "./CustomLinks";
import Document from "./Documents";
import SocialSection from "./SocialSection";
import AddressSection from "./AddressSection";
import UPIPaymentButton from "./UPIPaymentButton";
import "../styles/other.css"

export default function HeaderProfile({ user, accountType }) {
  return (
    <div className="profile-card-wrapper">

      <ProfileHeader user={user} accountType={accountType} />

      <CoverImage url={user.cover_image} />

      <ProfileAgeAndGender
        name={user.name}
        bio={user.bio}
        profileUrl={user.profile_image}
        gender={user.gender}
        birthYear={Number(user.birth_year)}
      />

      <div className="profile-sections">
        <BasicInfo
          statusType={user.status_type}
          fillOne={user.fillone}
          fillTwo={user.filltwo}
          joinedAt={user.created_at}
        />

        <SelectedLanguage
          languages={user.selected_languages || []}
        />

        <Document
          documents={user.documents || []}
        />

        <CustomLinks links={user.custom_links} />

        <SocialSection
          socials={user.social_accounts || {}}
        />

        <AddressSection
          address={user.address}
          lat={user.lat}
          lng={user.lng}
        />

        <UPIPaymentButton
          upiId={user.upi_id}
        />
      </div>
    </div>
  );
}
