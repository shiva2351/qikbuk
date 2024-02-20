import { Component } from "react";
import UserContext from "./context/UserContext";
import "./App.css";

import TradeRoute from "./components/TradeRoute";

class App extends Component {
  state = {
    List: [
      {
        name: "shiva",
        number: 23232,
        role: "office",
        userId: "shikmr",
        password: 2323,
      },
    ],
  };
  UpdateList = (add) => {
    this.setState((preState) => ({ List: [...preState, add] }));
  };

  render() {
    const { List } = this.state;
    return (
      <UserContext.Provider
        value={{
          UpdateList: this.UpdateList,
          List,
        }}
      >
        <div className="App">
          <TradeRoute />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
