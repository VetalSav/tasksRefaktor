
type  Heading_h2Type ={
    titleHeading:string
}


export const Heading_h2 =(props:Heading_h2Type)=>{
    return(
        <h2>
            {props.titleHeading}
        </h2>
    )
   }