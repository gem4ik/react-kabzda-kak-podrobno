import React, {useMemo, useState} from 'react';

export const MemoTest = () => {

    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    let resultFirst = 1
    let resultSecond = 1
//----------пк не справился, не запускай-----------------------//
    resultSecond = useMemo(()=>{
        let abrakadabra = 1
        for (let i=1; i<first;i++){
            let fake = 0
            fake++
            while(fake<10){
                const fakeValue = Math.random()
            }
        }
        return abrakadabra
    }, [first])
//----------пк не справился, не запускай-----------------------//


    for (let i=1;i<second;i++) {
        resultSecond *= i
    }

    return (
        <div>
            <input disabled value={first} onChange={(e)=>{setFirst(+e.currentTarget.value)}}/>
            <input value={second} onChange={(e)=>{setSecond(+e.currentTarget.value)}}/>
            <div>{resultFirst}</div>
            <div>{resultSecond}</div>
        </div>
    );
};