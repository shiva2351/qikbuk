import { PiSquaresFourBold } from "react-icons/pi";

import "./index.css";

const SideHeader = () => {
  console.log("head");
  return (
    <nav className="Side">
      <ul className="Side-ul">
        <li className="Side-li">
          <div>
            <img
              className="image-pro"
              alt="profile"
              src="https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868"
            />
            <h1>Q Trade</h1>
          </div>
          <ul className="Side-uls">
            <li className="Side-li">
              <PiSquaresFourBold />
              Bid
            </li>
            <li className="Side-li">
              <PiSquaresFourBold />
              POD
            </li>
            <li className="Side-li">
              <PiSquaresFourBold />
              Vendor
            </li>
            <li className="Side-li">
              <PiSquaresFourBold />
              User
            </li>
          </ul>
        </li>
        <li className="Side-li">
          <ul className="Side-uls">
            <li className="Side-li">
              <PiSquaresFourBold />
              Settings
            </li>
            <li className="Side-li">
              <PiSquaresFourBold />
              Profile
            </li>
            <li className="Side-li">
              <PiSquaresFourBold />
              Contact Us
            </li>
            <li className="Side-li">
              <PiSquaresFourBold />
              Logout
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideHeader;
