import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import Comments from "./components/Comments";

function App() {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  const addComment = (comment) => {
    setComments([...comments, comment]);
    setCommentCount(commentCount + 1);
  };

  return (
    <div>
      <Post commentCount={commentCount} />
      <Comments comments={comments} addComment={addComment} />
    </div>
  );
}

export default App;
