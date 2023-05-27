import React from "react";
import './Rating.css'
import {Span} from "./Span";

export type RatingPropsType = {
    ratingValue: number
    setRatingValue: (value: number)=>void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Span
                ratingValue={props.ratingValue}
                setRatingValue={props.setRatingValue}
            />
        </div>
    )
}

