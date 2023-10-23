import React from "react";
import { phoneText, emailText } from "../../../../resources/constants";
import "./styles.scss";

// Psuedo elements/selector
// nth-child
// images -> public

const ContactInfo = (props) => {
  let location = props.location;
  let phone = props.phone;
  let email = props.email;

  return (
    <div className="contact-info">
      <div className="ci__location">
        <div className="ci__location-img">
          <img src='/images/a.svg' alt='location image'/>
        </div>
        <div className="ci__location-text">{location}</div>
      </div>
      <div className="ci__phone">
        <span>{phoneText}</span>
        <span>{phone}</span>
      </div>
      <div className="ci__email">
        <span>{emailText}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
