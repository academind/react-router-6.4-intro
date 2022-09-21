import { json, useLoaderData, useNavigation, defer } from 'react-router-dom';
import Posts from '../components/Posts';
import { getPosts } from '../util/api';
import { sleep } from '../util/sleep';

function BlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loaderData} />
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
