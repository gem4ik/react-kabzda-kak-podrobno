import React from "react";

export type ratingPropsType = {
    value: number
}

export function Rating(props: ratingPropsType) {
    return(
        <ul>
            <li>star</li>
        </ul>
    )
}