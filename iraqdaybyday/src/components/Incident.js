import React from "react";


export default function Incident(props) {

    let mainClass = "incident";

    if(props.isTitle) {
        mainClass += " incident-title"
    }

    return (

        <div className={mainClass}>

            <div className="incident-details location">
                <div>{props.loc}</div>
            </div>

            <div className="incident-details target">
                <div>{props.tar}</div>
            </div>

            <div className="incident-details weapons">
                <div>{props.wea}</div>
            </div>

            <div className="incident-details casualties">
                <div>{props.minCas}</div>
            </div>
            <div className="incident-details casualties">
                <div>{props.maxCas}</div>
            </div>

        </div>
    )
}