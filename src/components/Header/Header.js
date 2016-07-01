import React, {Component} from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Header.scss";
import Navigation from "../Navigation";

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav}/>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Service Aggregator</h1>
            <p className={s.bannerDesc}>The service aggregator between a client and a contractor</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(Header, s);
