import React from "react";
import AccountSection from "./PartialFishes/AccountSection";
import AmountSection from "./PartialFishes/AmountSection";
import PersonSection from "./PartialFishes/PersonSection";

const PersonalFish = ({ type }) => {
  return (
    <div className="row border border-4 border-info rounded-3 p-1 p-md-4 m-0">
      <AmountSection />

      <PersonSection type={type} />

      <AccountSection type={type} />
    </div>
  );
};

export default PersonalFish;
