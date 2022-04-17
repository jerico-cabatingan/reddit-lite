import React from "react";
import { Post } from "../../components/Post";
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { 
  selectPosts,
  isLoading, 
  loadingFailed } from "./feedSlice";

// useEffect() is needed to load the feed when the component will mount
// Posts will be determined by the feedSlice of state
// <Feed/> will pass slice data to posts through props

export function Feed() {
  
  return(
    <div className='#'>
      {/* Will render a list of posts by mapping over <Post/> */}
      {/* Don't forget to include loading and error pages */}
    </div>
  )
}