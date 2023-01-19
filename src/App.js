import React, { useState } from 'react';

import './styles/App.css';

import PostList from './Components/PostList';

import PostForm from './Components/PostForm';
import MySelect from './Components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  //Получаем post из дочернего компонента
  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = sort => {
    selectedSort(sort);
    console.log(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[]}
        />
      </div>

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Post of JS " />
      ) : (
        <h1 style={{ textAlign: 'center' }}> Posts are not find</h1>
      )}
    </div>
  );
}

export default App;
