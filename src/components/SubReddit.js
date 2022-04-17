import React from "react";
// this action will be used to render new posts when a subreddit is clicked
import { filterBySubReddit } from "../feed/feedSlice";

// will recieve props from the <SubReddits/>
// will render image, and title

export function SubReddit() {
  return(
    <div className='#'>

    </div>
  )
}



const subredditObjectData = {
  id: '',
  icon_img: '',
  display_name_prefixed: '',
  url: '',
  subscribers: null // number of subscribers
}