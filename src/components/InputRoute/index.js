import { Component } from "react";
import { FaFilter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import UserContext from "../../context/UserContext";

import "./index.css";

class InputRoute extends Component {
  state = { name: "", number: "", role: "", userId: "", password: "" };

  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  numberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  roleChange = (event) => {
    this.setState({ role: event.target.value });
  };

  userChange = (event) => {
    this.setState({ userId: event.target.value });
  };

  passChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { name, number, role, userId, password } = this.state;
    return (
      <UserContext.Consumer>
        {(value) => {
          const { UpdateList } = value;
          const formSubmit = (event) => {
            event.preventDefault();
            UpdateList({ name, number, role, userId, password });
          };
          return (
            <div>
              <div>
                <ul className="Input-ul">
                  <li className="Input-li">All Vendors</li>
                  <li className="Input-li">
                    <div className="Search-card">
                      <CiSearch />
                      <input
                        type="search"
                        className="search"
                        placeholder="search"
                      />
                    </div>
                  </li>
                  <li className="Input-li">
                    <button>Add User +</button>
                    <FaFilter className="Input-filter" />
                  </li>
                </ul>
              </div>
              <div>
                <form onSubmit={formSubmit}>
                  <ul className="Input-uls">
                    <li className="Input-li">
                      <label htmlFor="name">Name</label>
                      <input
                        onChange={this.nameChange}
                        value={name}
                        id="name"
                        type="text"
                      />
                    </li>
                    <li className="Input-li">
                      <label htmlFor="no">Phone Number</label>
                      <input
                        onChange={this.numberChange}
                        value={number}
                        id="no"
                        type="text"
                      />
                    </li>
                    <li className="Input-li">
                      <label htmlFor="role">Role</label>
                      <input
                        onChange={this.roleChange}
                        value={role}
                        id="role"
                        type="text"
                      />
                    </li>
                    <li className="Input-li">
                      <label htmlFor="user">User Id</label>
                      <input
                        onChange={this.userChange}
                        value={userId}
                        id="user"
                        type="text"
                      />
                    </li>
                    <li className="Input-li">
                      <label htmlFor="pass">Password</label>
                      <input
                        onChange={this.passChange}
                        value={password}
                        id="pass"
                        type="password"
                      />
                    </li>
                  </ul>
                  <button type="submit">Create</button>
                </form>
              </div>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default InputRoute;
