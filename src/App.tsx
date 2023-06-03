import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/OnOff";
import {HandmadeSelector} from "./components/HandmadeSelector";
import {v1} from "uuid";

export type SelectorItemTypes = {
    id: string
    title: string
    value: string
}

function App() {

    const [collapsedValue, setCollapsedValue] = useState<boolean>(false)
    const [collapsedSecondValue, setCollapsedSecondValue] = useState<boolean>(false)
    const [selectValue, setSelectValue] = useState('2')

    const setCollapsedHandler = () => {
        setCollapsedValue(!collapsedValue)
    }
    const setCollapsedSecondHandler = () => {
        setCollapsedSecondValue(!collapsedSecondValue)
    }

    const [squareOnOff, setSquareOnOff] = useState(false)
    const [roundOnOff, setRoundOnOff] = useState(false)
    const setSquareChecker = () => {
        setSquareOnOff(!squareOnOff)
    }
    const setRoundChecker = () => {
        setRoundOnOff(!roundOnOff)
    }

    const [ratingValue, setRatingValue] = useState(0)

    return (
        <div>
            <Accordion
                collapsed={collapsedValue}
                setCollapsedHandler={setCollapsedHandler}
            />
            <Accordion
                collapsed={collapsedSecondValue}
                setCollapsedHandler={setCollapsedSecondHandler}
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

export default App;