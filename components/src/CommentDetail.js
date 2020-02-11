import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  console.log(props);
  return (
    <div className="ui  container comments">
      <div className="comment">
        <a className="avatar">
          <img src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a className="author">{props.author}</a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice Blog post</div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentDetail;