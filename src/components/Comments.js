import React, { useState } from "react";

function Comments({ comments, addComment }) {
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      addComment(newComment);
      setNewComment("");
    }
  };

  return (
    <div>
      <h2>Coments</h2>
      <div>
        <textarea
          value={newComment}
          onChange={handleInputChange}
          placeholder="Comment"
        />
        <button onClick={handleAddComment}>Add</button>
      </div>
      <div>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Comments;
