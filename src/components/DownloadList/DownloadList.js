import React from "react";

import Download from "../../assets/images/icons/download.svg";

const DownloadList = ({ filename, updated }) => {
  return (
    <div className="download-list-container">
      <h2 className="file-name">
        {filename} <span>{updated}</span>
      </h2>
      <button>
        <img src={Download} alt="Download" />
      </button>
    </div>
  );
};

export default DownloadList;
