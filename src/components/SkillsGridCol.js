import React from "react";

const SkillsGridCol = ({ headingText, children }) => {
  return (
    <>
      <p className="flex items-center">{headingText}</p>
      <ul>{children}</ul>
    </>
  );
};

export default SkillsGridCol;
