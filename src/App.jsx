import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostsLoader } from './pages/BlogPosts';
import DeferredBlogPostsPage, {
  loader as deferredBlogPostsLoader,
} from './pages/DeferredBlogPosts';
import ErrorPage from './pages/Error';
import NewPostPage, { action as newPostAction } from './pages/NewPost';
import { action as newsletterAction } from './pages/Newsletter';
import PostDetailPage, { loader as blogPostLoader } from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: '/blog',
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <DeferredBlogPostsPage />,
            loader: deferredBlogPostsLoader,
          },
          {
            path: ':id',
            element: <PostDetailPage />,
            loader: blogPostLoader,
          },
        ],
      },
      {
        path: '/blog/new',
        element: <NewPostPage />,
        action: newPostAction,
      },
    ],
  },
  {
    path: '/newsletter',
    action: newsletterAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
