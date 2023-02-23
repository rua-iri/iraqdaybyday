import React from "react";
import axios from "axios";
import Incident from "./Incident";
import TodayDate from "./TodayDate";

export default function Main() {


    // TODO iterate over an array of incidents for this day 20 years ago

    // TODO if there are no incidents on this day then there should be a default message

    const [minTotalKilled, setMinTotalKilled] = React.useState();
    const [maxTotalKilled, setMaxTotalKilled] = React.useState();
    const [todayCasualties, setTodayCasualties] = React.useState();

    React.useEffect(() => {
        getTotal();
        getToday();
    }, [])

    function getTotal() {
        axios.get("https://8f8ach1f5c.execute-api.us-east-1.amazonaws.com/IraqCasualties?type=total")
            .then(result => {
                setMinTotalKilled(result.data[0].minCas);
                setMaxTotalKilled(result.data[0].maxCas);
            })
    }

    function getToday() {
        axios.get("https://8f8ach1f5c.execute-api.us-east-1.amazonaws.com/IraqCasualties?type=test")
            .then(result => {
                setTodayCasualties(result.data);
            })
    }

    let blah;


    // TODO make this if statement work if no results are returned
    // for SOME REASON javascript evaluates []!==[] to true!!!!!
    // therefore if todayCasualties is empty then this still evalutes to true
    // also an empty array evaluates to true and we can't map an empty array obviously

    if (todayCasualties) {
        blah = todayCasualties.map((content, key) => (
            <Incident loc={content.location} tar={content.target} wea={content.weapons} minCas={content.minimum_reported} maxCas={content.maximum_reported} isTitle={false} oddEven={key % 2} key={key} />
        ))
    } else {
        // TODO div to appear if no incidents on this day
        blah = <div>{"blah"}</div>
    }

    const incidentHeader = <Incident loc="Location" tar="Target" wea="Weapons" minCas="Min Casualties" maxCas="Max Casualties" isTitle={true} />



    return (
        <div>
            <h2 className="total-count">
                Total Killed So Far:
            </h2>
            <div>
                Minimum: {minTotalKilled}
            </div>
            <div>
                Maximum: {maxTotalKilled}
            </div>

            <h2>
                Incidents Today (<TodayDate />)
            </h2>

            <div className="incident-container">

                {incidentHeader}

                {blah}
            </div>

        </div>
    )
}