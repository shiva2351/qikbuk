import { Component } from "react";
import "./index.css";
import UserContext from "../../context/UserContext";

class UserRoute extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(value) => {
          const { List } = value;
          return (
            <ul>
              <li>
                <li>
                  <ul className="User-ul">
                    <li className="user-li">sl no.</li>
                    <li className="user-li">name</li>
                    <li className="user-li">Phone number</li>
                    <li className="user-li">Role</li>
                    <li className="user-li">UserId</li>
                    <li className="user-li">password</li>
                    <li className="user-li">Action</li>
                  </ul>
                </li>
              </li>
              {List.map((eachItem) => (
                <li key={eachItem.name}>
                  <ul className="User-ul">
                    <li className="user-li">1</li>
                    <li className="user-li">{eachItem.name}</li>
                    <li className="user-li">{eachItem.number}</li>
                    <li className="user-li">{eachItem.role}</li>
                    <li className="user-li">{eachItem.userId}</li>
                    <li className="user-li">{eachItem.password}</li>
                    <li className="user-li">Action</li>
                  </ul>
                </li>
              ))}
            </ul>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default UserRoute;
