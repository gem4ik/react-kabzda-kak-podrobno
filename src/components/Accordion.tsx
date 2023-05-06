import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <SmallAccordion value={props.titleValue}/>
        { props.collapsed && <SmallestAccordion collapsed={props.collapsed}/>}
    </div>
}

type smallPropsType={
    value: string
}
function SmallAccordion(props: smallPropsType) {
    return (props.value === "three")? <h1>заголовок</h1> : <h2>заголовок</h2>
}

type smallestPropsType = {
    collapsed: boolean
}

function SmallestAccordion(props: smallestPropsType) {
    if (props.collapsed) {
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    } else {
        return <div>Hidden list</div>
    }
}