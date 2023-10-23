import React from "react";

import "./styles.scss";

const PersonInfo = (props) => {
  const fullName = props.name;
  const names = fullName.split(" ");
  const firstName = names[0];
  const lastName = names[1];
  const designation = props.designation;

  return (
    <div className="person-info-cont">
      <div className="pic__name">
        <span className="pic__name-first">{firstName}</span>
        <span className="pic__name-last"> {lastName}</span>
      </div>
      <div className="pic__designation">{designation}</div>
    </div>
  );
};

export default PersonInfo;
