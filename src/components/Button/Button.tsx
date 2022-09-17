import React from "react";
import "./button.modules.css"

type ButtonType = {
    nameButton: string
    callBack: () => void

}

export const Button = (props: ButtonType) => {
    const onclickHandler = () => {
        props.callBack()
    }
    return (
        <button className={"btn"} onClick={onclickHandler}>{props.nameButton}</button>
    )
}