import React from "react";



const Sidebar = ({lists, ...props}) => {

    const changeActive = (l) => {
        props.onClick(l);
    }  
    return (
      <div className="sidebar">
          <div>
            <ul>
                {lists.map(l => 
                  <li key={l.id}>
                    <a onClick={() => changeActive(l)}><span>({l.tasks.length})</span> {l.title}</a>
                  </li> 
                )}
            </ul>
          </div>
      </div>  
    )
}

export default Sidebar;