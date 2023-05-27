import React, {FC} from "react";

export type AccordionPropsType = {
    collapsed: boolean
    setCollapsedHandler:()=> void
}
export const List=()=> {
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}

export const Accordion: FC<AccordionPropsType> = (
    {
        collapsed,
        setCollapsedHandler
    }) => {
    const OnClickHandler = () => {
        setCollapsedHandler()
    }
    return <div>
       <h1 onClick={OnClickHandler}>заголовок</h1>
        {collapsed ? <List /> : "Hidden List"}
    </div>
}