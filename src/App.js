import React, {useRef, useState} from "react";
import Counter from "./components/counter";
import ClassComponent from "./components/ClassComponent";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'React 1', body:'Description' },
    {id:2, title: 'React 2', body:'Description' },
    {id:3, title: 'React 3', body:'Description' }
  ])
  const [post, setPost] = useState({title:'', body:''})




  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id:Date.now()}])
    setPost({title:'', body:''})
  }


  return (
    <div className="App">
      <form>
        {/*Управляемый компонент*/}
        <MyInput
          value={post.title}
          onChange = {e => setPost({...post, title:e.target.value})}
          type="text"
          placeholder="Title"/>

        {/*Неуправляемый компонент*/}
          <MyInput
            value={post.body}
            onChange = {e => setPost({...post, body:e.target.value})}
            type="text"
            placeholder="description"/>
          <MyButton  onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="React Lists"/>
    </div>
  );
}

export default App;
