import React from "react";
import { CommentList } from "../features/comments/commentList";
import { 
  getPostComments, 
  selectComments, 
  selectCommentsShowing,
  selectCommentsIsLoading,
  selectCommentsDidNotLoad,
  toggleComments } from "../features/comments/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function Post({post}) {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const commentsLoading = useSelector(selectCommentsIsLoading);
  const commentsDidNotLoad = useSelector(selectCommentsDidNotLoad);
  const commentsShowing = useSelector(selectCommentsShowing);

  const dateObj = new Date(post.created_utc * 1000)
  const humanDateFormat = (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1)+ "/" + (dateObj.getUTCDate());

  const [ postToggled, setPostToggled ] = useState(false);

  const handleClick = () => {
    dispatch(toggleComments(!commentsShowing))
    dispatch(getPostComments(post.permalink))
    setPostToggled(!postToggled)
  }

  const renderMedia = () => {
    if (post.is_video) {
      return (
      <video loop autoPlay controls style={mediaStyle}>
        <source src={post.secure_media.reddit_video.fallback_url}/>
      </video>
      )
    } else {
      return <img src={post.url} style={mediaStyle}/>
    }
  }

  const renderComments = () => {
    if (commentsLoading) {
      return <h4>Comments loading...</h4>
    } 
    else if (commentsDidNotLoad) {
      return <h4>Failed to load comments</h4>
    } 
    else {
      return (
        <div>
         <CommentList comments={comments}/>
        </div>
      )
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
        <a href={post.url} style={linkStyle}>{post.domain}</a>
      </div>

      <div style={postInfoStyle}>

        <span style={infoStyle}>Posted: {humanDateFormat}</span>
        <span style={infoStyle}>Score: {post.score}</span>
        { (!commentsShowing) &&
        <button 
          style={infoStyle}
          onClick={handleClick}>Show comments: {post.num_comments}
        </button> 
        }

      </div>

      { (commentsShowing && postToggled) && renderComments() }

    </div>
  )
}

const mediaStyle = {
  width: '100%',
  marginBottom: 20,
}

const containerStyles = {
  marginBottom: 20,
  padding: 15,
  boxShadow: "5px 5px 5px #ccc",
  maxWidth: 1000
}

const linkStyle = {
  color: '#26a1ff',
  position: 'relative',
  bottom: 10,
  left: 10,
}

const postInfoStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: 10,
  paddingTop: 15,
  borderTop: '2px solid #c8d3db'
}

const infoStyle = {
  fontSize: 13.33,
  padding: 7,
  fontFamily: 'Arial',
  border: 'none',
  borderRadius: 10
} 