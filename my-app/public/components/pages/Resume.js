import myResume from "./docs/resume.pdf";

import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div>
        <a href={myResume}>Resume</a>
      </div>
    </div>
  );
};

export default Resume;