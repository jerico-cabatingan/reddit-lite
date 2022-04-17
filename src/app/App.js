import React from 'react';
import './App.css';
import { Search } from '../features/search/Search';
import { Feed } from '../features/feed/Feed';
import { Subreddits } from '../features/subreddits/Subreddits';
import { getSubredditPosts } from '../features/feed/feedSlice';
import { useDispatch } from 'react-redux';
import { getPostComments } from '../features/comments/commentsSlice';


export default function App() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getSubredditPosts('/r/interestingasfuck/'));
    dispatch(getPostComments('/r/interestingasfuck/comments/u5q3a8/footage_of_a_3_year_old_chimney_sweep_from_the/'));
  }

  return (
    <div>
      <header onClick={handleClick}>
        <Search/>
        Click Me!
      </header>
      <div className='feed'>
        <Feed/>
      </div>
      <aside>
        <Subreddits/>
      </aside>
    </div>
  )
}


