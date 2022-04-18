import React, { useEffect } from "react";
import { useSelector, useDispatch} from  "react-redux";
import { SubReddit } from "./SubReddit";
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
  }, [dispatch]);

  if (loading) {
    return <h3>Subreddits are loading...</h3>
  }

  if (loadingError) {
    return (
    <>
      <h3>There was an error. Please try again</h3>
      <button onClick={dispatchEvent(getSubreddits())}>Refresh</button>
    </>
    )
  }

  return (
    <>
      <h3 style={{fontSize: 25}}>Subreddits</h3>
      <ul className='subreddits-list' style={{listStyle: "none"}}>
        {
        subreddits.map((subreddit, index)=>
          <li key={index}>
            <SubReddit 
              subreddit={subreddit}
              key={subreddit.id}/>
          </li>)
        }
      </ul>
    </>
  )
}

// const subRedditPostsArray = [{}, {}, {}, {}, {}]

// const subredditObjectData = {
//   id: '',
//   icon_img: '',
//   display_name_prefixed: '',
//   url: '',
//   subscribers: null // number of subscribers
// }