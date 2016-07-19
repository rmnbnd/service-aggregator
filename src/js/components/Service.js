import React from "react";

export default class Service extends React.Component {
    render() {
        const {title} = this.props;

        return (
            <div class="col-md-4">
                <h4>{title}</h4>
                <p>Description for some service</p>
            </div>
        );
    }
}