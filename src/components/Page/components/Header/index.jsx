import React from "react";
import PersonInfo from "./components/PersonInfo";
import ContactInfo from "./components/ContactInfo";
import "./styles.scss";

const Header = (props) => {
  return (
    <div className="header">
      <PersonInfo name={props.user.name} designation={props.user.designation} />
      <ContactInfo
        location={props.user.location}
        phone={props.user.phone}
        email={props.user.email}
      />
    </div>
  );
};

export default Header;
