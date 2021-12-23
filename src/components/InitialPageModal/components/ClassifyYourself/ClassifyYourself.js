import React, { useState } from "react";

const ClassifyYourself = () => {
  const [classifyValue, setClassifyValue] = useState("");
  const [activeId, setActiveId] = useState();

  const data = [
    {
      id: 1,
      title: "Retail",
      description:
        "Retail, or non-institutional, investors are, by definition, any investors that are not institutional investors. That is pretty much every person who buys and sells debt, equity, or other investments through a broker, bank, real estate agent etc.",
    },
    {
      id: 2,
      title: "Professional ",
      description:
        "Institutional investors invests in pension funds, mutual funds, money managers, insurance companies, investment banks, commercial trusts, endowment funds, hedge funds, and also some private equity investors",
    },
  ];

  const handleValue = (id, value) => {
    setActiveId(id);
    setClassifyValue(value);
    console.log(activeId);
  };

  console.log(classifyValue, "classifyValue"); // selected classification value is stored  in counntryValue

  return (
    <div className="step-section-margin">
      {data.map((item, e) => (
        <div className="classify-select-box">
          <button
            className={`classify-btn ${item.id === activeId ? "active" : ""}`}
            onClick={() => handleValue(item.id, item.title)}
          >
            <span className="classify-img">
              <svg
                width="110"
                height="106"
                viewBox="0 0 110 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55 53.3913C54.7396 53.5408 53.2943 54.1635 50.6641 55.2595C48.0339 56.3555 46.5104 57.053 46.0938 57.3519C48.0729 60.1916 49.974 62.6327 51.7969 64.6753C51.3281 65.6716 50.651 67.9882 49.7656 71.625C48.8802 75.2618 47.9297 79.4466 46.9141 84.1793C45.8984 88.9121 45.3646 91.3782 45.3125 91.5774C45.2604 91.428 44.7135 91.2287 43.6719 90.9796C42.6302 90.7305 41.5234 90.2697 40.3516 89.5971C39.1797 88.9246 38.4115 87.9905 38.0469 86.7948C37.2135 84.1046 36.5104 80.0693 35.9375 74.6889C35.3646 69.3084 34.9219 64.5134 34.6094 60.3037C34.2969 56.094 33.9583 53.7649 33.5938 53.3166C33.2292 53.466 32.4089 53.8646 31.1328 54.5122C29.8568 55.1599 28.5417 55.7328 27.1875 56.231C25.625 56.779 23.4896 57.5263 20.7812 58.4728C18.0729 59.4194 15.9375 60.1791 14.375 60.752C12.8125 61.325 11.0807 62.01 9.17969 62.8071C7.27865 63.6042 5.74219 64.4137 4.57031 65.2357C3.39844 66.0577 2.5 66.8922 1.875 67.7391C0.625 70.9275 0 83.6812 0 106H110C110 100.42 109.857 93.1467 109.57 84.1793C109.284 75.212 108.802 69.7319 108.125 67.7391C107.5 66.8922 106.602 66.0577 105.43 65.2357C104.258 64.4137 102.721 63.6042 100.82 62.8071C98.9193 62.01 97.1875 61.325 95.625 60.752C94.0625 60.1791 91.9271 59.4194 89.2188 58.4728C86.5104 57.5263 84.375 56.779 82.8125 56.231C81.4583 55.7328 80.1432 55.1599 78.8672 54.5122C77.5911 53.8646 76.7708 53.466 76.4062 53.3166C76.0417 53.7649 75.7422 56.094 75.5078 60.3037C75.2734 64.5134 74.9089 69.3084 74.4141 74.6889C73.9193 80.0693 73.2552 84.1046 72.4219 86.7948C72.0573 87.9905 71.2891 88.9246 70.1172 89.5971C68.9453 90.2697 67.8385 90.7305 66.7969 90.9796C65.7552 91.2287 65.2083 91.428 65.1562 91.5774C61.9271 76.4823 59.6094 67.5149 58.2031 64.6753C60.026 62.6327 61.9271 60.1916 63.9062 57.3519C63.4896 57.053 61.9661 56.3555 59.3359 55.2595C56.7057 54.1635 55.2604 53.5408 55 53.3913ZM55 0.782608C61.9271 0.782608 67.8255 3.11164 72.6953 7.7697C77.5651 12.4278 80 18.0697 80 24.6957C80 31.3216 77.5651 36.9635 72.6953 41.6216C67.8255 46.2797 61.9271 48.6087 55 48.6087C48.0729 48.6087 42.1745 46.2797 37.3047 41.6216C32.4349 36.9635 30 31.3216 30 24.6957C30 18.0697 32.4349 12.4278 37.3047 7.7697C42.1745 3.11164 48.0729 0.782608 55 0.782608ZM76.25 24.8451C74.2188 25.2437 71.3151 25.0568 67.5391 24.2846C63.763 23.5125 60.5729 22.6033 57.9688 21.5571C56.1979 20.8098 54.5052 19.9504 52.8906 18.9789C51.276 18.0075 49.4271 16.7869 47.3438 15.3173C45.2604 13.8476 43.6458 12.764 42.5 12.0666C43.3333 17.995 40.4167 22.2296 33.75 24.7704C33.8021 30.3999 35.8984 35.1825 40.0391 39.1182C44.1797 43.0539 49.1667 45.0217 55 45.0217C60.8333 45.0217 65.8203 43.0539 69.9609 39.1182C74.1016 35.1825 76.1979 30.4248 76.25 24.8451Z"
                  fill={item.id === activeId ? "#c9b16d" : "#EEEFEF"}
                />
              </svg>
            </span>
            <span>
              <h1 className="classify-title">{item.title}</h1>
              <p className="classify-text">{item.description}</p>
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ClassifyYourself;
