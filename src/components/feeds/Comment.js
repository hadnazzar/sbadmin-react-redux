import React from 'react';

import CommentActivityWidget from './CommentActivityWidget';

const Reply = ({ username, comment }) => (
  <div className='media mt-3'>
    <img className='d-flex mr-3' src='http://placehold.it/45x45' alt='' />
    <div className='media-body'>
      <h6 className='mt-0 mb-1'>
        <a href='#'>{username}</a>
      </h6>
      {comment}
      <CommentActivityWidget />
    </div>
  </div>
);

const Comment = ({ comment }) => {
  let ReplyComponents = null;
  if (comment.replies) {
    ReplyComponents = comment.replies.map((v, i) => (
      <Reply key={i} username={v.username} comment={v.commentText} />
    ));
  }
  return (
    <div className='media'>
      <img className='d-flex mr-3' src='http://placehold.it/45x45' alt='' />
      <div className='media-body'>
        <h6 className='mt-0 mb-1'>
          <a href='#'>{comment.username}</a>
        </h6>
        {comment.commentText}
        <CommentActivityWidget />
        {ReplyComponents}
      </div>
    </div>
  );
};

export default Comment;
