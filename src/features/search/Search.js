import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySearchTerm } from "../feed/feedSlice";

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  // disptach search filter to render new posts when a new search term is submitted
  const handleSubmit = ({target}) => {
    setSearchTerm(target.value);
    dispatch(filterBySearchTerm(searchTerm.toLowerCase()))
  } 

  return(
    <form className='search-bar' onSubmit={handleSubmit}>
      {/* // will render a <from></form> and use state hooks to send data to searchSlice  */}
    </form>
  )
}