type InputType = {
    type: string
    defaultChecked?: boolean
    value?: string

}

export const Input = (props: InputType) => {
    return (
        <input type={props.type} checked={props.defaultChecked} value={props.value}/>
    )
}