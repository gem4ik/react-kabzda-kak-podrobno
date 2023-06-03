import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './HandmadeSelector.module.css'
import {SelectorItemTypes} from "../App";

export type HandmadeSelectorType = {
    items: SelectorItemTypes[]
    value: any
    setSelectValue: (value: string) => void
}

export const HandmadeSelector = (props: HandmadeSelectorType) => {

    const [collapseSelector, setCollapseSelector] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    const onTitleClickHandler = () => {
        setCollapseSelector(!collapseSelector)
    }
    const onItemClickHandler = (value: string) => {
        props.setSelectValue(value)
        setCollapseSelector(!collapseSelector)
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLHeadingElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const nextElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (nextElement) {
                        props.setSelectValue(nextElement.value)
                        return
                    }
                }
            }
            if (!selectedCity) {
                props.setSelectValue(props.items[0].value)
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter') {
            setCollapseSelector(!collapseSelector)
        }
    }

    const selectedCity = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElement)

    const mappedItems = props.items.map((el => {

        return (
            <div key={el.id}
                 onMouseEnter={() => setHoveredElement(el.value)}
                 className={s.option + ' ' + (hoveredItem === el ? s.selected : '')}
                 onClick={() => onItemClickHandler(el.value)}
            >
                {el.title}
            </div>
        )
    }))

    return (
        <div>
            <h3 onClick={onTitleClickHandler}
                tabIndex={0}
                onKeyUp={onKeyUpHandler}
                className={s.select}>
                {selectedCity && selectedCity.title}
            </h3>
            {collapseSelector &&
                <div className={s.options}>
                    {mappedItems}
                </div>}
        </div>
    )
}