import React from "react";


export default function Todoitem(props)
{
    return(
        <>
            <li className="d-flex justify-content-between">
                <span>
                {props.completed ? <></> : <input type="checkbox" className="m-2" />}
                    <span className="">{props.text}</span>
                </span>
                <p>...</p>
            </li>
        </>
    )
}