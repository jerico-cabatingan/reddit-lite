import React from 'react';
import { Search } from '../features/search/Search';
import { Feed } from '../features/feed/Feed';
import { Subreddits } from '../features/subreddits/Subreddits';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getSubreddits } from '../features/subreddits/subredditsSlice';

export default function App() {
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(getSubreddits())
  // }, []);

  return (
    <>
      <Search/>
      <div>
        <Feed/>
      </div>
      <aside style={{float: 'right'}}>
        <Subreddits/>
      </aside>
    </>
  )
}


