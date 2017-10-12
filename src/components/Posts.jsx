import React, {Component} from 'react';
import Post from './Post';
import FakePost from '../seed/fakePost.js'
import styled from 'styled-components';

const PostWrapper = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
-webkit-justify-content: center;
justify-content: center;




`
class Posts extends Component {
  state = {
    posts: []
  }
  componentWillMount(){
    const posts = [];
    for(let i = 0; i < 20; i++){
      posts.push(new FakePost);
    }
    this.setState({posts});
  }
  render() {
    return (
      <PostWrapper>
        {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
      </PostWrapper>
    )
  }
}

export default Posts;