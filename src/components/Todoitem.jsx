import React from "react";


export default function Todoitem()
{
    return(
        <>
            <li className="flex justify-between items-center">
                <span>
                    <input type="checkbox" className="ml-2" />
                    <span className="pl-2">Eat</span>
                </span>
                <p>...</p>
            </li>
        </>
    )
}