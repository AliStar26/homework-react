import React from "react";

function Post({ commentCount }) {
  return (
    <div>
      <p>Количество комментариев: {commentCount}</p>
    </div>
  );
}

export default Post;
