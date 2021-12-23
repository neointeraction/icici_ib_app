import React from "react";

const Terms = () => {
  return (
    <div className="step-section-margin">
      <div className="term-block">
        <p className="term-text">
          We are committed to maintaining the accuracy, confidentiality, and
          security of our users’ personal information. This Privacy Policy
          describes the personal information that we collect from or about our
          users, how we use that information, and to whom it is disclosed.
        </p>
        <p className="term-text">
          We are committed to maintaining the accuracy, confidentiality, and
          security of our users’ personal information. This Privacy Policy
          describes the personal information that we collect from or about our
          users, how we use that information, and to whom it is disclosed. This
          Policy is designed to comply with the privacy requirements established
          by the General Data Protection Regulation (“GDPR”), as well as with
          all applicable laws around the world that are intended to protect an
          individual’s privacy. It supports our need to collect information from
          our users as necessary for our performance of business services and
          functions, while also recognizing a user’s right to have their
          information handled in a way that protects the privacy of their
          personal information. You may learn more about the GDPR here:
          https://www.eugdpr.org/{" "}
        </p>
        <p className="term-text">
          For purposes of this Policy, a user may also be referred to as “you,”
          “your,” or “data subject.”
        </p>
      </div>
      <div className="agree-input">
        <input
          className="custom-checkbox"
          id="custom-checkbox-1"
          type="checkbox"
          value="value1"
        />
        <label for="custom-checkbox-1">Accept T&C</label>
      </div>
    </div>
  );
};

export default Terms;
