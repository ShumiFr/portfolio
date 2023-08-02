import React from "react";
import GithubLogo from "../assets/img/github-6980894_1280.png";

const Github = () => {
  return (
    <div className="github-logo">
      <a target="blank" href="https://github.com/ShumiFr">
        <img src={GithubLogo} alt="Github Logo" />
      </a>
    </div>
  );
};

export default Github;
