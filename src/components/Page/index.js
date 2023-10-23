import React from "react"; // Library
import HorizontalSeparator from "./components/Shared/HorizontalSeparator"; //shared
import { userInfoData } from "./resources/dummy";
import Header from "./components/Header"; // Child
import Body from "./components/Body";
import "./styles.scss"; // styling

const Page = () => {
  return (
    <div className="page">
      <Header user={userInfoData} />
      <HorizontalSeparator />
      <Body summary={userInfoData.profileSummary} />
      <HorizontalSeparator />
    </div>
  );
};

export default Page;
