import React, { useEffect } from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySearchTerm } from "../feed/feedSlice";
import { selectSearchFilter } from "../feed/feedSlice";

export function Search() {
  const [searchTerm, setSearchTerm] = useState(' ');
  const dispatch = useDispatch();
  const searchTermSliceData = useSelector(selectSearchFilter)

  useEffect(() => 
    console.log(searchTermSliceData), [searchTerm]) 

  const updateFeed = (term) => {
    dispatch(filterBySearchTerm(term.toLowerCase()))
  }

  // disptach search filter to render new posts when a new search term is submitted
  const handleChange = ({target}) => {
    const newTerm = target.value;
    setSearchTerm(newTerm);
    updateFeed(newTerm);
  } 

  return(
    <header>
      <input 
        className='search-input'
        value={searchTerm}
        onChange={handleChange}
        type='text'
        placeholder='Search Reddit lite!'
        />
    </header>
  )
}