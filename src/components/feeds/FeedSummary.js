import React from 'react';

const FeedSummary = ({ imageUrl = 'http://placehold.it/45x45' }) => (
  <a className='list-group-item list-group-item-action' href='#'>
    <div className='media'>
      <img className='d-flex mr-3 rounded-circle' src={imageUrl} alt='' />
      <div className='media-body'>
        <strong>David Miller</strong> posted a new article to{' '}
        <strong>David Miller Website</strong>.
          <div className='text-muted smaller'>Today at 5:43 PM - 5m ago</div>
      </div>
    </div>
  </a>
);

export default FeedSummary;
