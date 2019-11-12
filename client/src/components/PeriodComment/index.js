import React from "react"


const PeriodComment = props => {
return(
    <ul>
        {props.comments.map(comment=>(
            // <li>{comment}</li>
            <li>test</li>
       ))}
    </ul>
)
}
export default PeriodComment;