import React, {useEffect, useState, KeyboardEvent} from 'react';
import {SelectorItemTypes} from "../App";
import s from './HandmadeSelector.module.css'

export type HandmadeSelectorType = {
    option: SelectorItemTypes[]
}

export const HandmadeSelector = (props: HandmadeSelectorType) => {

    const [collapseSelector, setCollapseSelector] = useState(false)
    const [selectedCity, setSelectedCity] = useState(props.option[0].title)
    const [activeOption, setActiveOption] = useState<number>(0)

    const onClickHandler = () => {
        setCollapseSelector(!collapseSelector)
    }

    const onOptionClick =(value: number, title: string)=>{
        setActiveOption(value)
        setSelectedCity(title)
        setCollapseSelector(!collapseSelector)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if(!collapseSelector) {
            return
        }
        switch (e.key) {
            case "ArrowUp":
                setActiveOption((prev) => (prev === 0 ? props.option.length - 1 : prev - 1));
                break;
            case "ArrowDown":
                setActiveOption((prev) => (prev === props.option.length - 1 ? 0 : prev + 1));
                break;
            case "Enter":
                e.preventDefault()
                onOptionClick(activeOption, selectedCity)
                break;
            case "Escape":
                setCollapseSelector(false);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (collapseSelector) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [collapseSelector]);


    const mappedItems = props.option.map((option, index) => {
        const onOptionClickHandler =(title: string)=> {
            setSelectedCity(title)
            onOptionClick(index, title)
        }
        const onMouseEnterHandler = (value: number) => {
            setActiveOption(value)
        }

        return (<div
                key={option.value}
                onMouseEnter={()=>onMouseEnterHandler(option.value)}
                className={s.option + ' ' +  (activeOption === index ? 'active' : '')}
                onClick={()=>onOptionClickHandler(option.title)}
            >
                {option.title}
            </div>
        )
    })

    return (
        <div>
            <div onClick={onClickHandler}
                 className={s.select}>
                {selectedCity}
            </div>
            {collapseSelector &&
                <div className={s.options}>
                    {mappedItems}
                </div>}
        </div>
    )
}