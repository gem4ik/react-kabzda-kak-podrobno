import React from "react";
import './Span.css'

export type PropsType = {
    ratingValue: number
    setRatingValue: (value: number) => void
}

export function Span(props: PropsType) {
    const setRatingHandler = (newRating: number) => {
    props.setRatingValue(newRating)
    }
    return (
        <div>
            {[1,2,3,4,5].map(el=> {
                return(
                    <span
                        key={el}
                        className={props.ratingValue >= el ? 'active' : ''}
                        onClick={()=>{setRatingHandler(el)}}
                    > star </span>
                )
            })}
        </div>
    )
}