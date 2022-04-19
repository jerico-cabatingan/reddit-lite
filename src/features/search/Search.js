import React, { useEffect } from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySearchTerm } from "../feed/feedSlice";
import { selectSearchFilter } from "../feed/feedSlice";

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const searchTermSliceData = useSelector(selectSearchFilter)

  const updateFeed = (term) => {
    dispatch(filterBySearchTerm(term.toLowerCase()))
  }

  const handleChange = ({target}) => {
    const newTerm = target.value;
    setSearchTerm(newTerm);
    updateFeed(newTerm);
  } 

  return(
    <header style={headerStyle}>
      <input 
        className='search-input'
        value={searchTerm}
        onChange={handleChange}
        type='text'
        placeholder='Search Reddit lite!'
        style={searchBarStyle}/>
    </header>
  )
}

const headerStyle = {
  padding: 30,
  backgroundImage: 'linear-gradient(#1a2b40, #ffffff)',
  textAlign: 'center'
}

const searchBarStyle = {
  top: '50%',
  padding: 10,
  borderRadius: 20,
  width: '50vw',
  maxWidth: 500
}