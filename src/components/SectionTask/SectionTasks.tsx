import "./Sectiontasks.modules.css"
import {Title} from "../Title/Title";
import {Input} from "../Input/Input";
import {Heading_h2} from "../Heading/Heading_h2/Heading_h2";
import {Button} from "../Button/Button";
import {Task} from "../Task/Task";
import {InputAddText} from "../Input/InputAddText/InputAddText";
import React, {ChangeEvent, useState} from "react";


export type TaskType = {
    taskID: string
    text: string
    defaultChecked: boolean


}
export  type Tasks_Type = {

    sectionID: string
    titleHeading: string
    task: Array<TaskType>
    removeTask: (sectionID: string, taskID: string) => void
    filterTask: (sectionID: string, filter: string) => void
    addTextInput: (sectionID:string,onlineValueInput:string) => void
    onChangeTextInput:(sectionID:string) =>void
}

export const SectionTasks = (props: Tasks_Type) => {

    let [onlineValueInput,setOnlineValueInput] = useState("") ;

    const onChangeTextInput = (e: ChangeEvent<HTMLInputElement>) => {
        setOnlineValueInput(e.currentTarget.value) ;
        props.onChangeTextInput(props.sectionID)
    }
    const addTextInput = () => {
        props.addTextInput(props.sectionID,onlineValueInput)
        setOnlineValueInput('')

    }
    let tasks = props.task.map(e => {
        //Function
        const removeTask = () => {
            props.removeTask(props.sectionID, e.taskID)
        }


        return (
            <li key={e.taskID}>
                <Task
                    key={e.taskID}
                    taskID={e.taskID}
                    text={e.text}
                    defaultChecked={e.defaultChecked}
                    removeTask={removeTask}/>
            </li>)
    })
    return (
        <div className={"container_Tasks"}>
            <Heading_h2 titleHeading={props.titleHeading}/>
            <InputAddText
                onlineValueInput={onlineValueInput}
                sectionID={props.sectionID}
                addTextInput={addTextInput}
                onChangeTextInput={onChangeTextInput}
                />
            <ul>
                {tasks}
                <Button nameButton={"active"} callBack={() => props.filterTask(props.sectionID, "active")}/>
                <Button nameButton={"completed"} callBack={() => props.filterTask(props.sectionID, "completed")}/>
                <Button nameButton={"all"} callBack={() => props.filterTask(props.sectionID, "all")}/>

            </ul>
        </div>)
}