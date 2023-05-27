import React from "react";

export type PropsType = {
    selected: boolean
    setSelected: (value: boolean) => void
}

export function Span(props: PropsType) {
    const onClickHandler = () => {
        props.setSelected(!props.selected)
    }
    return (
        <div>
            <span onClick={onClickHandler}>
            {props.selected ? <b>star </b> : "star "}
        </span>
        </div>
    )
}