import { useState, useEffect } from "react";
import { getPosts } from "../../API/ApiUtils";
import ErrorMessage from '../ErrorMessage'

function ApiComponent() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null)
  useEffect(() => {
    getPosts()
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => {
        setError(err);
    });
  }, []);
  return (
    <div>
        {error !== null? <ErrorMessage message={error} />:''}
      <h1>API Component</h1>

      {posts &&
        posts.slice(0, 5).map((post) => <h3 key={post.title}>{post.title}</h3>)}
    </div>
  );
}

export default ApiComponent;
