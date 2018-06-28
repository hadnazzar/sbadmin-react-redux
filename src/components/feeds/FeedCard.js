import React from 'react';

import ActivityWidget from './ActivityWidget';
import Comment from './Comment';

const FeedCard = ({
  username, statusText, imageSrc, comments, time,
}) => {
  let CommentComponent = null;
  if (comments) {
    CommentComponent = (
      <div className='card-body small bg-faded'>
        {comments.map((v, i) => <Comment key={i} comment={v} />)}
      </div>
    );
  }

  return (
    <div className='card mb-3'>
      <a href='#'>
        <img className='card-img-top img-fluid w-100' src={imageSrc} alt='' />
      </a>
      <div className='card-body'>
        <h6 className='card-title mb-1'>
          <a href='#'>{username}</a>
        </h6>
        <p className='card-text small'>{statusText}</p>
      </div>
      <hr className='my-0' />
      <ActivityWidget />
      <hr className='my-0' />
      {CommentComponent}
      <div className='card-footer small text-muted'>{time}</div>
    </div>
  );
};

export default FeedCard;
