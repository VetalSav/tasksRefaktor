import {Input} from "../Input/Input";
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";


type TaskType = {
    taskID:string
    text: string
    type?: any
    defaultChecked:boolean
    removeTask:(taskID:string)=>void


}

export  const  Task = (props:TaskType)=>{
    const removeTask = () => {
      props.removeTask(props.taskID)
    }
    return (
        <>
            <Input type={"checkbox"} defaultChecked={props.defaultChecked} />
            <Title text={props.text} />
            <Button nameButton={"delete"} callBack={removeTask}/>

        </>
    )

}