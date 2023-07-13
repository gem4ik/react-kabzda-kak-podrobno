import React, {useEffect, useState} from 'react';
import './SetTimeoutExample.css'

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    const [ViewMode, setViewMode] = useState(false)

    // useEffect(() => {
    //     console.log('sdfhgb')
    //     setInterval(()=>{
    //         setCount(state=>state + 1)
    //     }, 1000)
    //
    // }, [])
    let realTime = new Date()
    const [time, setTime] = useState(realTime)

    useEffect(()=>{
        setInterval(()=> {
            setTime(new Date())
        }, 1000)
    }, [])

    const secondsStyle = {
        transform: `rotate(${time.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${time.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${time.getHours() * 30}deg)`
    };

    let switchClock = ViewMode
        ?<div>
            {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
        </div>
        :<div>
            <div className={"clock"}>
                <div className={"analog-clock"}>
                    <div className={"dial seconds"} style={secondsStyle} />
                    <div className={"dial minutes"} style={minutesStyle} />
                    <div className={"dial hours"} style={hoursStyle} />
                </div>
            </div>
        </div>

    return (
        <div>
            {switchClock}
            <button onClick={()=>setViewMode(!ViewMode)}>ViewMode</button>
            Hello,{count},{fake}
            <button onClick={() => setCount(count + 1)}> counter +</button>
            <button onClick={() => setFake(fake + 1)}> fake +</button>
        </div>
    );
}