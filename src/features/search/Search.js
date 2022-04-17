import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// this import will be used to render new posts when a new search term is submitted
import { filterBySearchTerm } from "../feed/feedSlice";


// this component will render a form with text input field
// the event handler will set state whenever theres a change
// the component will dispatch the state data to the feed reducer

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setSearchTerm(target.value)
    dispatch()
  } 

  return(
    <form className='#'>
      {/* // will render a <from></form> and use state hooks to send data to searchSlice  */}
    </form>
  )
}