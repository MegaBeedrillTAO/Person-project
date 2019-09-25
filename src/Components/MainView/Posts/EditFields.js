import React from 'react'

export default function EditFields(props) {
    return (
        <div className='editFields'>
            <section>{props.content}</section>
            <input  onChange={props.function}/>
        </div>
    )
}
