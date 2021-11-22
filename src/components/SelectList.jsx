import React from "react";


const SelectList = ({activeList}) => {
    return (
        <div className="selected">
            <h1>{activeList.title}</h1>
            <ol>
                {activeList.tasks.map((t, i) => <li key={i}>{t}</li>)}
            </ol>
        </div>
    )
}

export default SelectList