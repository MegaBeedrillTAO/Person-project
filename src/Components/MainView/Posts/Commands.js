import React from 'react'

export default function Commands(props) {
    return (
        <div className={props.type} style={{backgroundColor:`${props.color}`}}>
            {props.content}
        </div>
    )
}
