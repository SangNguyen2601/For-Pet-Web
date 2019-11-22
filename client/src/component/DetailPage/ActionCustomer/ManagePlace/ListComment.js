
import React from 'react';
import 'antd/dist/antd.css';

import { Comment, Avatar } from 'antd';

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
    style={{textAlign:'left'}}
  >
      { children }
  </Comment>
);

class ListComment extends React.Component{

    render(){
        return(
            <ExampleComment>
                <ExampleComment />
                <ExampleComment />
            </ExampleComment>
        );
    };
}

export default ListComment;
          