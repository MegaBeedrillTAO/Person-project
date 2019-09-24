import React from 'react'

export default function Commands(props) {
    return (
        <div className={props.type} style={{backgroundColor:`${props.color}`}}>
            <p>{props.content}</p>
        </div>
    )
}
