import React, { useState } from "react";
import AddForm from "./components/AddForm";
import SelectList from "./components/SelectList";
import Sidebar from "./components/Sidebar";

function App() {
  const [lists, setLists] = useState([
    {id: 1, title: 'css', tasks: ['simple', 'learn css']},
    {id: 2, title: 'html', tasks: ['simple', 'learn html', 'some learn']},
    {id: 3, title: 'js', tasks: ['simple', 'learn js']},
    {id: 4, title: 'jquery', tasks: ['simple', 'learn jquery']},
    {id: 5, title: 'bootstrap', tasks: ['simple', 'learn bootstrap']}

  ]);

  const [activeList, setActiveList] = useState(lists[0])

  const changeActiveList = (l) => {
    setActiveList(l);
  }

  const addNewTask = (t) => {
    setActiveList({...activeList, tasks: [...activeList.tasks, t]})
    const newList = [...lists];
    let findIndex = newList.findIndex(l => l.id == activeList.id)
    newList[findIndex] = {...activeList, tasks:[...activeList.tasks, t]}
    setLists(newList)
  }
  
  return (
    
      <div className="content">
        <Sidebar onClick={changeActiveList} lists={lists}/>
        <div className="selected-list">
          <SelectList activeList={activeList}/>
          <AddForm onSubmit={addNewTask}/>
        </div>
      </div>
    
  );
}

export default App;
