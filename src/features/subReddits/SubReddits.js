import React, { useEffect } from "react";
import { useDispatch, useSelector } from  "react-redux";
 import {
  selectSubreddits,
  isLoading,
  didNotLoad,
  getSubreddits
} from './subredditsSlice';

// useEffect() is needed to dispatch async action to load the subreddits when the component mounts
// useState hook needed to access store data


export function Subreddits() {
  const subreddits = useSelector(selectSubreddits);
  const loading = useSelector(isLoading);
  const loadingError = useSelector(didNotLoad);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getSubreddits())
  }, []);

  console.log(subreddits)
 

  return(
    <div className='#'>
      {/* map over the subreddits array and render <SubReddit/> for each subreddit */}
    </div>
  )
}

// const subRedditPostsArray = [{}, {}, {}, {}, {}]

// const postObjectData = {
//   author: '',
//   title: '',
//   created_utc: 0, // convert to human readable date
//   id: '',
//   subreddit: '',
//   url: '',
//   permalink: '', // path for comment retrieval
//   is_video: null,
//   num_comments: 0
// }