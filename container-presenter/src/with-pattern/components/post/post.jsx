const Post = ({ post }) => {
  return (
    <div key={post.id} className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 150)}...</p>
      <span className="post-date">
        {new Date(post.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
};

export default Post;
