import React from 'react';

export interface Props {
  post: any;
}

const Post: React.FC<Props> = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
       <img src={'https://upply-interview.herokuapp.com/images/'+props.post.src} />
      <p>{props.post.date}</p>
      <p>{props.post.text}</p>
    </div>
  )
}

export default Post;