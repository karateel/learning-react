import React, {useState} from "react";

function App() {
  const [likes, setLikes] = useState(0);
  function like(){
      setLikes(likes + 1)
  }
  function dislike(){
    setLikes(likes - 1)
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={like}>Like</button>
      <button onClick={dislike}>Dislike</button>
    </div>
  );
}

export default App;
