import React, {useReducer, useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/OnOff";
import {HandmadeSelector} from "./components/HandmadeSelector";
import {v1} from "uuid"

export type SelectorItemTypes = {
    id: string
    title: string
    value: string
}
export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type){
        case "SET-COLLAPSED" :
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }
}

export function App() {

    const [collapsedValue, setCollapsedValue] = useState<boolean>(false)

    const [selectValue, setSelectValue] = useState('2')
    const [collapsedSecondValue, dispatch] = useReducer(reducer, {collapsed: false})
    const [ratingValue, setRatingValue] = useState(0)


    const setCollapsedHandler = () => {
        setCollapsedValue(!collapsedValue)
    }

    const [squareOnOff, setSquareOnOff] = useState(false)
    const [roundOnOff, setRoundOnOff] = useState(false)

    const setSquareChecker = () => {
        setSquareOnOff(!squareOnOff)
    }
    const setRoundChecker = () => {
        setRoundOnOff(!roundOnOff)
    }


    return (
        <div>
            <Accordion
                collapsed={collapsedValue}
                setCollapsedHandler={setCollapsedHandler}
            />
            <Accordion
                collapsed={collapsedSecondValue.collapsed}
                setCollapsedHandler={()=>{dispatch({type: 'SET-COLLAPSED'})}}
            />
            <hr/>
            <OnOff
                squareOnOff={squareOnOff}
                roundOnOff={roundOnOff}
                setSquareChecker={setSquareChecker}
                setRoundChecker={setRoundChecker}
            />
            <hr/>
            <Rating
                setRatingValue={setRatingValue}
                ratingValue={ratingValue}
            />
            <hr/>
            <HandmadeSelector value={selectValue}
                              items={[
                                  {id: v1(), title: "Moscow", value: '1'},
                                  {id: v1(), title: "Minsk", value: '2'},
                                  {id: v1(), title: "Kiev", value: '3'},
                              ]}
                              setSelectValue={setSelectValue}
            />
            <hr/>
        </div>
    );
}