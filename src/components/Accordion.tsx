import React, {FC} from "react";
import {List} from "./List";
import {StateType} from "../App";

export type AccordionPropsType = {
    collapsed: StateType | boolean
    setCollapsedHandler:()=> void
}

export const Accordion: FC<AccordionPropsType> = (
    {
        collapsed,
        setCollapsedHandler,
    }) => {
    const items = [
        {title:'Dimych', value: 1},
        {title:'Misha', value: 2},
        {title:'Artem', value: 3},
        {title:'valera', value: 4},]

    const OnClickHandler = () => {
        setCollapsedHandler()
    }

    return <div>
       <h1 onClick={OnClickHandler}>заголовок</h1>
        {collapsed ? <List
            items={items} /> : "Hidden List"}
    </div>
}