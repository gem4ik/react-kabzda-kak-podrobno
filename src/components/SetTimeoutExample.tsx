import React, {useEffect, useState} from 'react';

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)


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

    return (
        <div>
            <div>
                {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
            </div>
            Hello,{count},{fake}
            <button onClick={() => setCount(count + 1)}> counter +</button>
            <button onClick={() => setFake(fake + 1)}> fake +</button>
        </div>
    );
}