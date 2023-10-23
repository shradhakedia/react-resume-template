import React from "react";
import './styles.scss';
import { profileSummary } from "../../../../resources/constants"

const ProfileSummary = (props) => {
    return (
        <div className="profile-summary">
            <div className="ps__label">{profileSummary}</div>
            <div className="ps__details">{props.summary}</div>
        </div>
    );
}


export default ProfileSummary;