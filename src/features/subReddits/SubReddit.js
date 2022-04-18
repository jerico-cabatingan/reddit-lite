import React from "react";
// this action will be used to render new posts when a subreddit is clicked
// import { filterBySubReddit } from "../features/feed/feedSlice";

// will recieve props from the <SubReddits/>
// will render image, and title

export function SubReddit({subreddit}) {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return(
    <div className='subreddit-container'
    style={containerStyle}>
      <img 
        src={subreddit.icon_img ||
          'https://i0.wp.com/i.pinimg.com/originals/c7/65/3f/c7653f9e8d1d0e13212970213ebc76f6.png?resize=650,400'}
        style={imgStyle}
        className="subreddit-img"/> 
      <div> 
        <h4>{subreddit.display_name_prefixed}</h4>
        <h6>Subscribers: {numberWithCommas(subreddit.subscribers)}</h6>
      </div>
    </div>
  )
}


const imgStyle = {
  height: 50,
  width: 50,
  borderRadius: 25,
  boxShadow: "2px 2px 2px 1px #ccc"
}
const containerStyle = {
  display: 'inline',
  width: '50vw'
}


// const subredditObjectData = {
//   id: '',
//   icon_img: '',
//   display_name_prefixed: '',
//   url: '',
//   subscribers: null // number of subscribers
// }