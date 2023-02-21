import React from "react";
import Incident from "./Incident";

export default function Main() {


    // TODO iterate over an array of incidents for this day 20 years ago

    // TODO if there are no incidents on this day then there should be a default message

    const [totalKilled, setTotalKilled] = React.useState();
    const testAra = [1, 2, 3, 4, 5]

    React.useEffect(() => {
        setTotalKilled(0);
    }, [])

    const blah = testAra.map((content, key) => (
        <Incident loc="near Basra" tar="'mobile SAM system'" wea="precision guided weapons" minCas="2" maxCas="2" isTitle={false} key={key} />
    ))

    return (
        <div>
            <h2 className="total-count">
                Total Killed So Far: {totalKilled} Civilians
            </h2>

            <h2>
                Incidents from Today
            </h2>

            <div className="incident-container">

                <Incident loc="Location" tar="Target" wea="Weapons" minCas="Min Casualties" maxCas="Max Casualties" isTitle={true} />

                {blah}

            </div>

        </div>
    )
}