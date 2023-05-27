import React from "react";
import './Rating.css'
import {Span} from "./Span";

export type RatingPropsType = {
    selected: boolean
    setSelected: (value: boolean)=>void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Span selected={props.selected} setSelected={props.setSelected}/>
            <Span selected={props.selected} setSelected={props.setSelected}/>
            <Span selected={props.selected} setSelected={props.setSelected}/>
            <Span selected={props.selected} setSelected={props.setSelected}/>
            <Span selected={props.selected} setSelected={props.setSelected}/>
        </div>
    )
}

