import React from 'react';

const ActivityWidget = () => {
  return (
    <div className="card-body py-2 small">
      <a className="mr-3 d-inline-block" href="#">
        <i className="fa fa-fw fa-thumbs-up"></i>Like</a>
      <a className="mr-3 d-inline-block" href="#">
        <i className="fa fa-fw fa-comment"></i>Comment</a>
      <a className="d-inline-block" href="#">
        <i className="fa fa-fw fa-share"></i>Share</a>
    </div>
  );
}

export default ActivityWidget;