import React from "react";
import Service from "../components/Service";

export default class Services extends React.Component {
    render() {
        const Services = [
            "Уборка",
            "Повар",
            "Мастер красоты"
        ].map((title, i) => <Service key={i} title={title}/>);

        return (
            <div>{Services}</div>
        );
    }
}