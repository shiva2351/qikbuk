import { Component } from "react";
import { FaFilter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import "./index.css";

class InputRoute extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="Input-ul">
            <li className="Input-li">All Vendors</li>
            <li className="Input-li">
              <div className="Search-card">
                <CiSearch />
                <input type="search" className="search" placeholder="search" />
              </div>
            </li>
            <li className="Input-li">
              <button>Add User +</button>
              <FaFilter className="Input-filter" />
            </li>
          </ul>
        </div>
        <div>
          <ul className="Input-uls">
            <li className="Input-li">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" />
            </li>
            <li className="Input-li">
              <label htmlFor="no">Phone Number</label>
              <input id="no" type="text" />
            </li>
            <li className="Input-li">
              <label htmlFor="role">Role</label>
              <input id="role" type="text" />
            </li>
            <li className="Input-li">
              <label htmlFor="user">User Id</label>
              <input id="user" type="text" />
            </li>
            <li className="Input-li">
              <label htmlFor="pass">Password</label>
              <input id="pass" type="password" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default InputRoute;
