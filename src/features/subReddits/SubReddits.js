import React from "react";
import { useEffect } from  "react-redux";
import { useSelector, useDispatch } from "@reduxjs/toolkit";
import {
  selectSubreddits,
  isLoading,
  loadingFailed,
  synchronousOuterFunction
} from './subRedditsSlice';

// useEffect() is needed to dispatch async action to load the subreddits when the component mounts
// useState hook needed to access store data

export function SubReddits() {
  const subReddits = useSelector(selectSubreddits);
  const loading = useSelector(isLoading);
  const loadError = useSelector(loadingFailed);

  const dispatch = useDispatch();

  useEffect(() => {
    // synchronousOuterFunction()
  }, []);

  return(
    <div className='#'>
      {/* map over the subReddits array and render <SubReddit/> for each subreddit */}
    </div>
  )
}