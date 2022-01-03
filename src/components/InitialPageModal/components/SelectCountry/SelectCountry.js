import React, { useState } from "react";

import Uk from "../../../../assets/images/flags/uk.svg";
import SGP from "../../../../assets/images/flags/sgp.svg";
import US from "../../../../assets/images/flags/us.svg";
import UAE from "../../../../assets/images/flags/uae.svg";
import Fin from "../../../../assets/images/flags/fin.svg";
import France from "../../../../assets/images/flags/france.svg";

const data = [
  {
    id: 1,
    countryName: "UK",
    couintryFlag: Uk,
  },
  {
    id: 2,
    countryName: "Singapore",
    couintryFlag: SGP,
  },
  {
    id: 3,
    countryName: "USA",
    couintryFlag: US,
  },
  {
    id: 4,
    countryName: "UAE",
    couintryFlag: UAE,
  },
  {
    id: 5,
    countryName: "Finland",
    couintryFlag: Fin,
  },
  {
    id: 6,
    countryName: "France",
    couintryFlag: France,
  },
  {
    id: 7,
    countryName: "Germany",
    couintryFlag: Uk,
  },
  {
    id: 8,
    countryName: "Italy",
    couintryFlag: Uk,
  },
  {
    id: 9,
    countryName: "Luxembourg",
    couintryFlag: Uk,
  },
  {
    id: 10,
    countryName: "Spain",
    couintryFlag: Uk,
  },
  {
    id: 11,
    countryName: "Sweden",
    couintryFlag: Uk,
  },
  {
    id: 12,
    countryName: "Switzerland",
    couintryFlag: Uk,
  },
  {
    id: 13,
    countryName: "DIFC UAE",
    couintryFlag: Uk,
  },
  {
    id: 14,
    countryName: "Hong Kong",
    couintryFlag: Uk,
  },
];

const SelectCountry = () => {
  const [counntryValue, setCountryValue] = useState("");
  const [activeId, setActiveId] = useState();

  const handleValue = (id, value) => {
    setActiveId(id);
    setCountryValue(value);
    console.log(activeId);
  };

  console.log(counntryValue, "counntryValue"); // selected country value is stored  in counntryValue

  return (
    <div className="step-section-margin">
      <div className="row">
        {data.map((item, e) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <button
              className={`country-btn ${item.id === activeId ? "active" : ""}`}
              onClick={() => handleValue(item.id, item.countryName)}
            >
              <span>
                <img src={item.couintryFlag} alt={item.couintryFlag} />
              </span>
              <span> {item.countryName}</span>
            </button>
          </div>
        ))}
        <div className="col-lg-6 col-md-4 col-sm-12">
          <div className="input-with-icon">
            <input
              type="text"
              className="input-custom country-input"
              placeholder="Add your Country name here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCountry;
