import React from 'react';
import { Search } from '../features/search/Search';
import { Feed } from '../features/feed/Feed';
import { Subreddits } from '../features/subreddits/Subreddits';

export default function App() {


  return (
    <>
      <Search/>
      <main style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '75vw'}}>
          <Feed/>
        </div>
        <aside style={{width: '25vw'}}>
          <Subreddits/>
        </aside>
      </main>
      
    </>
  )
}


