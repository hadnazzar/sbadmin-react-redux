import React from 'react';

import FeedCard from './feeds/FeedCard';

const SocialFeed = ({ feeds }) => {
  const comments = [ { comment: 1 } ];
  return (
    <div className='card-columns'>
      {feeds.map((v, i) => (
        <FeedCard
          key={i}
          username={v.username}
          imageSrc={v.image_url}
          statusText={v.status}
          comments={v.comments}
          time={v.time}
        />
      ))}
    </div>
  );
};

export default SocialFeed;
