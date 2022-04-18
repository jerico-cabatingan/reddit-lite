import React from "react";
import { Post } from "../../components/Post";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { 
  selectPosts,
  selectIsLoading, 
  selectDidNotLoad,
  selectSubredditFilter,
  selectSearchFilter,
  getSubredditPosts } from "./feedSlice";

// useEffect() is needed to load the feed when the component will mount
// Posts will be determined by subreddit or search term filter
// useEffect() will re-render when these filters change

// <Feed/> will pass slice data to <Post/>'s through props

export function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectDidNotLoad);
  const subredditFilter = useSelector(selectSubredditFilter);
  const searchFilter = useSelector(selectSearchFilter);

  useEffect(() => {
    dispatch(getSubredditPosts(subredditFilter))
    }, [subredditFilter])
  
  return(
    <div>
      <ul style={postsStyle}>
        {posts.map((post, index) => 
          <li key={index}>
            <Post post={post} id={post.id}/>
          </li>
          )
        }
      </ul>
    </div>
  )
}

const postsStyle = {
  listStyleType: 'none',
  paddingRight: '10vw',
  paddingLeft: '10vw',
}