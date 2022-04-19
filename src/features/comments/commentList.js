import React from 'react';
import { Comment } from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComments, selectCommentsShowing } from './commentsSlice';

export function CommentList({comments}) {
  const dispatch = useDispatch();
  const commentsShowing = useSelector(selectCommentsShowing);

  const handleClick = () => {
    dispatch(toggleComments(!commentsShowing))
  }

  return (
    <>
      <ul style={{listStyle: "none"}}>
        {comments.map((comment, index) => 
          <li key={index}>
            <Comment comment={comment}/>
          </li>
          )
        }
      </ul>
      <aside style={hideCommentsStyle}
        onClick={handleClick}>Hide Comments</aside>
    </>
  )
}

const hideCommentsStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  padding: 10,
  color: 'grey'
}