import React from "react"
function PeriodComment(props){
return(
    <ul>
        {props.comments.map(comment=>(
            <li>{comment}</li>
       ))}
    </ul>
)
}
export default PeriodComment