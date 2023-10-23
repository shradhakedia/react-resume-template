import React from "react";
import ProfileSummary from "./components/ProfileSummary";
import './styles.scss';

const Body = (props) => {
    return (
        <div className="body">
            <ProfileSummary summary={props.summary}/>
        </div>
    );
}


export default Body;