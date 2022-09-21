import { useEffect, useState } from 'react';

import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
  const [error, setError] = useState();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    loadPosts();
  }, []);

  return (
    <>
      <h1>Our Blog Posts</h1>
      {isLoading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {!error && posts && <Posts blogPosts={posts} />}
    </>
  );
}

export default BlogPostsPage;

export async function loader({ request, params }) {
  // await sleep(2000);
  // return json([{ id: 'p1', title: 'First Post' }]); // same as return [] without json(...) (because useLoaderData() parses JSON automatically)
  // return fetch('https://jsonplaceholder.typicode.com/posts');
  return getPosts();
}
