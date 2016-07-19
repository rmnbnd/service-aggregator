import React from "react";
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav class="navbar navbar-inverse navbar-fixed-side" role="navigation">
                <div class="container">
                    <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li activeClassName="active" onlyActiveOnIndex={true}>
                                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Заказать услугу</IndexLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}