import React from "react";

export type ratingPropsType = {
    value: number
}

export function Rating(props: ratingPropsType) {
    if (props.value === 1) {
        return <div>
            <StarB/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    }
    if (props.value === 2) {
        return <div>
            <StarB/>
            <StarB/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    }
    if (props.value === 3) {
        return <div>
            <StarB/>
            <StarB/>
            <StarB/>
            <Star/>
            <Star/>
        </div>
    }
    if (props.value === 4) {
        return <div>
            <StarB/>
            <StarB/>
            <StarB/>
            <StarB/>
            <Star/>
        </div>
    }
    if (props.value === 5) {
        return <div>
            <StarB/>
            <StarB/>
            <StarB/>
            <StarB/>
            <StarB/>
        </div>
    }
    return <div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </div>
}

function StarB() {
    return <><b>Star</b> </>
}

function Star() {
    return <>Star </>
}