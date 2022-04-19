import React from "react";

// it will display text, usename, and timestamp by extrating state data and passing it down through props

export function Comment({comment}) {
  return(
    <div style={commentStyle}>
      <h5>{comment.author}</h5>
      <p>
        {comment.body}
      </p>
    </div>
  )
}

const commentStyle = {
  position: 'relative',
  right: 30,
}