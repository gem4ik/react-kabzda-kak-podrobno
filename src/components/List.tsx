import React from "react";

export type ItemType = {
    title: string
    value: any
}
export type ListPropsType = {
    items: ItemType[]
}
export const List = (props: ListPropsType) => {
    return (
        <div>
            {props.items.map((el, index) => {
                return (
                    <div
                        key={index}
                    >
                        {el.title}
                    </div>
                )
            })}
        </div>
    )
}