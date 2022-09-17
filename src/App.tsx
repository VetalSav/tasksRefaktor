import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {SectionTasks, TaskType} from "./components/SectionTask/SectionTasks";
import {InputAddText} from "./components/Input/InputAddText/InputAddText";


type ObjFromSectionType = {
    [x: string]: Array<TaskType>
}


function App() {


    let sectionID1 = v1(),
        sectionID2 = v1();

    let [objFromSection, setobjFromSection] = useState<ObjFromSectionType>({
        [sectionID1]: [
            {taskID: v1(), text: "Css", defaultChecked: false,},
            {taskID: v1(), text: "Css", defaultChecked: false,},
            {taskID: v1(), text: "Js", defaultChecked: true,},
        ],
        [sectionID2]: [
            {taskID: v1(), text: "Milk", defaultChecked: true,},
            {taskID: v1(), text: "Brot", defaultChecked: false,},
            {taskID: v1(), text: "Brot", defaultChecked: false,},
        ]
    })

    let [sections, setSections] = useState([
        {sectionID: sectionID1, titleHeading: "Technologi", filter: 'all'},
        {sectionID: sectionID2, titleHeading: "Shop", filter: 'completed'},

    ])

    const remuveTask = (sectionID: string, taskID: string) => {

        setobjFromSection({...objFromSection, [sectionID]: objFromSection[sectionID].filter(t => t.taskID !== taskID)})
    }

    const filtrTask = (sectionID: string, filter: string) => {
        setSections(sections.map(s => s.sectionID === sectionID ? {...s, filter: filter} : s))
    }
    ///?????
    const onChangeTextInput = (sectionID:string) => {

    }
    const addTextInput = (sectionID: string,onlineValueInput:string) => {
        let newTask = {taskID: v1(), text: onlineValueInput, defaultChecked: false,}
        setobjFromSection({...objFromSection, [sectionID]: [newTask, ...objFromSection[sectionID]]})
    }
    //Add Section
    const sect = sections.map(e => {

        let taskForSection = objFromSection[e.sectionID];
        let filter = e.filter;
        if (filter === 'completed') {
            taskForSection = objFromSection[e.sectionID].filter(t => t.defaultChecked);
        } else if (filter === 'active') {
            taskForSection = objFromSection[e.sectionID].filter(t => !t.defaultChecked)
        } else {
            taskForSection = objFromSection[e.sectionID]
        }

        return (
            <div>

                <SectionTasks

                    sectionID={e.sectionID}
                    key={e.sectionID}
                    titleHeading={e.titleHeading}
                    task={taskForSection}
                    removeTask={remuveTask}
                    filterTask={filtrTask}
                    onChangeTextInput={onChangeTextInput}
                    addTextInput={addTextInput}
                />
            </div>

        )
    })

    return (
        <div className="App">hello
            {sect}
        </div>)

}

export default App;
