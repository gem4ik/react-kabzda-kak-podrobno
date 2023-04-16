import React from "react";

export type propsTitleType = {
    value: string
}

export function PageTitle(props: propsTitleType) {
    if (props.value === "I'm the Page") {
        return <div>{props.value}</div>
    } else {
        return <>I'm NOT the page</>
    }
}