import "./title.modules.css"
type TitleType = {
    text:string
}
export const  Title = (props:TitleType)=>{
    return (
        <>
            <span className={"titleStyle"}>{props.text}</span>
        </>
    )
}