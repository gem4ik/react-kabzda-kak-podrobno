import React from 'react';
import './OnOff.css'

type PropsType={
    roundOnOff: boolean
    squareOnOff: boolean
    setRoundChecker: ()=>void
    setSquareChecker: ()=>void
}

export const OnOff = (props: PropsType) => {

    const roundCheckHandler = () => {
        props.setRoundChecker()
    }
    const squareCheckHandler = () => {
        props.setSquareChecker()
    }


    return (
        <div>
            <div>
                <label className="switch">
                    <input
                        checked={props.squareOnOff}
                        type="checkbox"
                        onChange={squareCheckHandler}
                    />
                    <span className="slider"></span>
                </label
                ></div>
            <div>
                <label className="switch">
                    <input
                        checked={props.roundOnOff}
                        type="checkbox"
                        onChange={roundCheckHandler}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
};