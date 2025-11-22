import { useEffect, useState } from "react";

function PostsFetchAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
 if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Posts Fetch Async</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsFetchAsync;
