import React from 'react';
import './App.css';
import { SubReddits } from '../features/subReddits/SubReddits';
import { Search } from '../features/search/Search';
import { Feed } from '../features/feed/Feed';

export default function App() {
  return (
    <div>
      <header>
        <Search/>
      </header>
      <div className='feed'>
        <Feed/>
      </div>
      <aside>
        <SubReddits/>
      </aside>
    </div>
  )
}


