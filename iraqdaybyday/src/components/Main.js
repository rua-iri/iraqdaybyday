import React from "react";
import axios from "axios";
import Incident from "./Incident";

export default function Main() {


    // TODO iterate over an array of incidents for this day 20 years ago

    // TODO if there are no incidents on this day then there should be a default message

    const [minTotalKilled, setMinTotalKilled] = React.useState();
    const [maxTotalKilled, setMaxTotalKilled] = React.useState();
    const [todayCasualties, setTodayCasualties] = React.useState();
    const testAra = [1, 2, 3, 4, 5]

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
        axios.get("https://8f8ach1f5c.execute-api.us-east-1.amazonaws.com/IraqCasualties?type=today")
            .then(result => {
                setTodayCasualties(result.data);
            })
    }

    const blah = testAra.map((content, key) => (
        <Incident loc="near Basra" tar="'mobile SAM system'" wea="precision guided weapons" minCas="2" maxCas="2" isTitle={false} key={key} />
    ))

    const incidentHeader = <Incident loc="Location" tar="Target" wea="Weapons" minCas="Min Casualties" maxCas="Max Casualties" isTitle={true} />



    return (
        <div>
            <h2 className="total-count">
                Total Killed So Far: {minTotalKilled} - {maxTotalKilled} Civilians
            </h2>

            <h2>
                Incidents from Today
            </h2>

            <div className="incident-container">

                {incidentHeader}

                {blah}

            </div>

        </div>
    )
}