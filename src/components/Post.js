import React from "react";

// will recieve props from the feed component
// post object will be destructured and rendered
// will render img if(img), title, author, number of comments

export function Post({post, id}) {

  const renderMedia = () => {
    if (post.is_video) {
      return (
      <video loop="" autoplay controls style={mediaStyle}>
        <source src={post.secure_media.reddit_video.fallback_url}/>
      </video>
      )
    } else {
      return (<img src={post.url ||
        'https://i0.wp.com/i.pinimg.com/originals/c7/65/3f/c7653f9e8d1d0e13212970213ebc76f6.png?resize=650,400'} style={mediaStyle}/>)
    }
  }

  return(
    <div id='post-container' style={containerStyles}>
      <div id='post-header'>
        <h3>{post.title}</h3>
        <h5>Author: {post.author}</h5>
      </div>
      <div id='media'> 
        {renderMedia()} 
      </div>
      <div id='post-info'>

      </div>
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

const mediaStyle = {
  width: '100%',
}

const containerStyles = {
  marginBottom: 20,
  padding: 10,
  boxShadow: "5px 5px 5px #ccc"
}