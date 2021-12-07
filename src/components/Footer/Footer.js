import React from "react";
import { Link } from "react-router-dom";

import Arrow from "../../assets/images/icons/btnArrow.svg";

const Home = () => {
  return (
    <footer className="footer footer-padding d-flex flex-column">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-title">QUICK LINKS</h5>
            <ul className="footer-link-list">
              <li>
                <a className="footer-link" href="/#">
                  About Us
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Investment Expertise
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Our Team
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Funds
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Downloads
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  News and Insights
                </a>
              </li>
              <li>
                <a className="footer-link" href="/#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div>
              <h5 className="footer-title"> LOCATE US</h5>
              <p className="w-lh">
                ONE BKC, A - Wing, 13th Floor, Bandra-Kurla Complex, Mumbai 400
                051
              </p>

              <a
                href="https://goo.gl/maps/Pyh9J6UTN9xHL2TG7"
                className="cntnt-outline opn-map"
              >
                <span> OPEN IN GOOGLE MAPS</span>
                <img src={Arrow} alt="Arrow" />
              </a>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="mb-20">
              <h5 className="footer-title">REACH US</h5>
              <ul className="contact-list">
                <li>Phone: +91 22 2652 5000</li>
                <li>Fax: +91 22 2652 8100</li>
                <li>Email: enquiry@icicipruamc.com</li>
              </ul>
            </div>
            <div className="socials">
              <h5 className="footer-title"> FOLLOW US ON</h5>
              <ul className="social-list">
                <li>
                  <a href="/#" className="social-icons fb">
                    <svg
                      width="11"
                      height="22"
                      viewBox="0 0 11 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="social-svg"
                        d="M2.80805 22V11.677H0V7.96017H2.80805V4.78555C2.80805 2.2909 4.46677 0 8.28882 0C9.83631 0 10.9806 0.14421 10.9806 0.14421L10.8904 3.61506C10.8904 3.61506 9.72344 3.60402 8.44996 3.60402C7.07167 3.60402 6.85085 4.22145 6.85085 5.24623V7.96017H11L10.8195 11.677H6.85085V22H2.80805Z"
                        fill="#002654"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/#" className="social-icons twitter">
                    <svg
                      width="23"
                      height="19"
                      viewBox="0 0 23 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="social-svg"
                        d="M23 2.25696C22.1542 2.62797 21.2337 2.89498 20.2857 2.99897C21.27 2.40434 22.0071 1.46492 22.3587 0.356964C21.4351 0.915691 20.4232 1.30748 19.368 1.51495C18.927 1.03553 18.3936 0.6536 17.801 0.392961C17.2085 0.132323 16.5695 -0.00143844 15.9239 1.16653e-05C13.3119 1.16653e-05 11.2112 2.15297 11.2112 4.79498C11.2112 5.16599 11.2554 5.53699 11.3272 5.89394C7.41606 5.68596 3.92777 3.78596 1.6087 0.876934C1.18614 1.61084 0.964705 2.44647 0.967432 3.2969C0.967432 4.96081 1.79942 6.42797 3.06814 7.29084C2.32047 7.26089 1.5903 7.05193 0.937027 6.68092V6.73995C0.937027 9.06998 2.55678 11.0009 4.71554 11.445C4.31021 11.552 3.89324 11.6068 3.47446 11.608C3.16765 11.608 2.87742 11.5771 2.58442 11.5349C3.18147 13.4349 4.92008 14.8149 6.99039 14.8599C5.37063 16.15 3.34179 16.9089 1.13881 16.9089C0.743541 16.9089 0.37868 16.8948 0 16.8499C2.08965 18.213 4.56904 19 7.23915 19C15.9073 19 20.6505 11.6979 20.6505 5.35992C20.6505 5.15193 20.6505 4.94394 20.6367 4.73596C21.5544 4.05297 22.3587 3.20696 23 2.25696Z"
                        fill="#002654"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/#" className="social-icons in">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="social-svg"
                        d="M5.07331 20.5962H1.00423V7.49239H5.07331V20.5962ZM3.03632 5.70493C1.73534 5.70493 0.679688 4.62686 0.679688 3.32587C0.679687 2.70085 0.927975 2.10143 1.36993 1.65948C1.81188 1.21753 2.4113 0.969238 3.03632 0.969238C3.66134 0.969238 4.26076 1.21753 4.70271 1.65948C5.14467 2.10143 5.39295 2.70085 5.39295 3.32587C5.39295 4.62686 4.3373 5.70493 3.03632 5.70493ZM20.3024 20.5962H16.2424V14.2174C16.2424 12.697 16.2116 10.7477 14.1269 10.7477C12.0114 10.7477 11.6869 12.3991 11.6869 14.1081V20.5962H7.62201V7.49239H11.5243V9.27984H11.581C12.1243 8.25013 13.4512 7.16364 15.4307 7.16364C19.5489 7.16364 20.3059 9.87566 20.3059 13.398V20.5962H20.3024Z"
                        fill="#002654"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/#" className="social-icons yt">
                    <svg
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="social-svg"
                        d="M21.9901 2.76149C21.8624 2.28787 21.613 1.85593 21.2665 1.50869C20.92 1.16144 20.4887 0.910984 20.0153 0.782255C18.2602 0.300334 11.2388 0.292489 11.2388 0.292489C11.2388 0.292489 4.21842 0.284644 2.46221 0.74527C1.98918 0.879924 1.55869 1.13392 1.2121 1.48287C0.865499 1.83182 0.614425 2.26402 0.482978 2.73796C0.0201098 4.49304 0.0156266 8.13322 0.0156266 8.13322C0.0156266 8.13322 0.0111437 11.7913 0.470649 13.5285C0.728421 14.489 1.48492 15.2477 2.44652 15.5066C4.21954 15.9885 11.222 15.9964 11.222 15.9964C11.222 15.9964 18.2434 16.0042 19.9985 15.5447C20.472 15.4162 20.9038 15.1663 21.2511 14.8198C21.5984 14.4733 21.8493 14.0421 21.9789 13.5688C22.4429 11.8149 22.4462 8.17581 22.4462 8.17581C22.4462 8.17581 22.4686 4.51658 21.9901 2.76149ZM8.9928 11.5055L8.9984 4.78108L14.8341 8.14892L8.9928 11.5055Z"
                        fill="#002654"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="brdr"> </div>
      </div>
      <div className="bottom-footer">
        <div className="b-footer">
          <div className="b-footer-row">
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>

            <Link to="/legal" className="footer-link">
              Legal Terms
            </Link>
          </div>
          <div className="b-footer-row">
            <Link to="/disclaimer" className="footer-link">
              Statutory Details & Disclaimer
            </Link>
            <a href="/#" className="footer-link">
              Disclosure Document
            </a>
          </div>
        </div>
        <div>
          <p>
            © ICICI Prudential Asset Management Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Home;
