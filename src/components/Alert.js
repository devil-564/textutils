import React from 'react'

export default function Alert(props) {
    const capatalized = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capatalized(props.alert.type)} : {props.alert.msg}</strong>
        </div>

    )
}
