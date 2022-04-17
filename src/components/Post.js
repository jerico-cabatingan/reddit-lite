import React from "react";

// will recieve props from the feed component
// post object will be destructured and rendered
// will render img if(img), title, author, number of comments

export function Post(props) {
  return(
    <div className='#'>

    </div>
  )
}

const postObjectData = {
  author: '',
  title: '',
  created_utc: 0, // convert to human readable date
  id: '',
  subreddit: '',
  url: '',
  permalink: '', // path for comment retrieval
  is_video: null,
  num_comments: 0
}