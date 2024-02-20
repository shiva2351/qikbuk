import { Component } from "react";
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
                <li>kk</li>
              </li>
              {List.map((eachItem) => (
                <li key={eachItem.name}>{eachItem.name}</li>
              ))}
            </ul>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default UserRoute;
