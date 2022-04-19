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

  if (loading) {
    return <h1>Posts are loading...</h1>
  }

  if (posts.length === 0 || error) {
    return (
      <>
      <h1>Refresh your feed</h1>
      <button onClick={dispatch(getSubredditPosts(subredditFilter))}>Try Again</button>
      </>
    )
  }

  const renderedPosts = posts.map((post, index) => 
    <li key={index}>
      <Post post={post} id={post.id}/>
    </li>
    )
  
  const applySearchFilter = () => {
    if (searchFilter.length > 0) {
      const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchFilter));
      // console.log(posts)
      // console.log(searchFilter)
      // console.log(filteredPosts)
      return filteredPosts.map((post, index) => 
        <li key={index}>
          <Post post={post} id={post.id}/>
        </li>)
    } else {
      return renderedPosts
    }
  }
  
  
  return(
    <div>
      <ul style={postsStyle}>
        {applySearchFilter()}
      </ul>
    </div>
  )
}

const postsStyle = {
  listStyleType: 'none',
  paddingRight: '5vw',
  paddingLeft: '5vw',
}