import { Component } from "react";
import Header from "../Header";
import SideHeader from "../SideHeader";
import DetailRoute from "../DetailRoute";
import UserRoute from "../UserRoute";
import "./index.css";

class TradeRoute extends Component {
  render() {
    return (
      <div className="Trade">
        <SideHeader />

        <div className="Trade-card">
          <Header />
          <DetailRoute />
          <UserRoute />
        </div>
      </div>
    );
  }
}

export default TradeRoute;
