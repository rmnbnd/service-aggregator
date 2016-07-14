import React from "react";

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Service Aggregator"
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}