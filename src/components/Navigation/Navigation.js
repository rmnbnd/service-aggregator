import React, {Component, PropTypes} from "react";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Navigation.scss";
import Link from "../Link";

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <Link className={s.link} to="/">Home</Link>
        <Link className={s.link} to="/about">About</Link>
        <Link className={s.link} to="/contact">Contact</Link>
      </div>
    );
  }

}

export default withStyles(Navigation, s);
