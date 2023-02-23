import React from "react";

export default function TodayDate() {

    // display today's date in 2003
    const todayDate = new Date();
    const todayString = `${String(todayDate.getDate()).padStart(2, '0')}/${String(todayDate.getMonth()).padStart(2, '0')}/${todayDate.getFullYear()}`;


    return (
        <>
            {todayString}
        </>
    )
}