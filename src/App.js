import React, {useRef, useState} from "react";
import Counter from "./components/counter";
import ClassComponent from "./components/ClassComponent";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'aaaa', body:'zzz' },
    {id:2, title: 'ccc', body:'ffff' },
    {id:3, title: 'bbb', body:'eee' }
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
       <MySelect
         value={selectedSort}
         onChange={sortPosts}
          defaultValue="Sort by"
          options={[
        {value: 'title', name:'title'},
        {value: 'body', name: 'description'},
      ]}
       />
      </div>
      {posts.length !== 0
       ? <PostList remove={removePost} posts={posts} title="React Lists"/>
        : <h1 style={{textAlign: 'center'}}>NO POSTS HERE</h1>
      }
    </div>
  );
}

export default App;
