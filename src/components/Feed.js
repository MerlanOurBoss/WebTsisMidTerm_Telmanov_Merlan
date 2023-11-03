import React, { useState } from 'react';
import Tweet from './Tweet';
import './Feed.css';

function Feed() {
  const initialPosts = [
    { id: 1, text: "First Tweet!", likes: 10, dislikes: 0, image: null },
    // Add more posts as necessary...
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [newPostText, setNewPostText] = useState('');
  const [newPostImage, setNewPostImage] = useState('');

  const incrementLikes = (postId) => {
    updatePost(postId, 'likes');
  };

  const incrementDislikes = (postId) => {
    updatePost(postId, 'dislikes');
  };

  const updatePost = (postId, type) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, [type]: post[type] + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const addPost = () => {
    const newPost = {
      id: posts.length + 1,
      text: newPostText,
      likes: 0,
      dislikes: 0,
      image: newPostImage,
    };
    setPosts(prevPosts => [...prevPosts, newPost]);
    setNewPostText('');
    setNewPostImage('');
  };

  const handleTextChange = (e) => {
    setNewPostText(e.target.value);
  };

  const handleImageChange = (e) => {
    setNewPostImage(e.target.value);
  };

  const renderPost = (post) => (
    <Tweet
      key={post.id}
      id={post.id}
      text={post.text}
      likes={post.likes}
      dislikes={post.dislikes}
      image={post.image}
      handlelike={incrementLikes}
      handledislike={incrementDislikes}
    />
  );

  return (
    <div >
      <div className="feed">
        <input
          type="text"
          value={newPostText}
          onChange={handleTextChange}
          placeholder="What's happening?"
        />
        <input
          type="text"
          value={newPostImage}
          onChange={handleImageChange}
          placeholder="Image URL"
        />
        <button onClick={addPost}>Post</button>
      </div>

      {posts.map(renderPost)}
    </div>
  );
}

export default Feed;
