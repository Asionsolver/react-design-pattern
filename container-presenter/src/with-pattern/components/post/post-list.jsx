import Post from "./post";

const PostList = ({ posts }) => {
  return (
    <div className="user-posts">
      <h2>Recent Posts ({posts.length})</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => <Post post={post} />)
      )}
    </div>
  );
};

export default PostList;
