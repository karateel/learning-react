import React, {useEffect, useMemo, useRef, useState} from "react";
// import Counter from "./components/counter";
// import ClassComponent from "./components/ClassComponent";
import './styles/App.css';
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
// import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts,filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts(){
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts)
    setIsPostsLoading(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET DATA</button>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        make post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop:50}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="React Lists"/>
      }
    </div>
  );
}

export default App;
