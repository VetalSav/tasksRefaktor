// @flow
import * as React from 'react';
import {Button} from "../../Button/Button";
import {ChangeEvent, useState} from "react";
import {v1} from "uuid";

type InputAddTextType = {
    onlineValueInput:string
    sectionID:string
    addTextInput: () => void
    onChangeTextInput: (e: ChangeEvent<HTMLInputElement>) => void
}

    ;
export const InputAddText = (props: InputAddTextType) => {
    //let [onlineValueInput,setOnlineValueInput] = useState("") ;
    const onChangeTextInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeTextInput(e)
    }
    const addTextInput = () => {
      props.addTextInput()
    }
    return (
        <>
            <input type={"text"} value={props.onlineValueInput} onChange={onChangeTextInput}/>
            <Button nameButton={"add"} callBack={addTextInput}/>
        </>

    );
};