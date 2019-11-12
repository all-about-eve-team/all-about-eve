import React from "react"


const PeriodComment = props => {
return(
    <div className="card-text">
        {props.comments.map(comment=>(
            // need author of comment
        <p>{comment}</p>
       ))}
    </div>
)
}
export default PeriodComment;