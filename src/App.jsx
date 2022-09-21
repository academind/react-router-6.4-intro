import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage from './pages/BlogPosts';
import NewPostPage from './pages/NewPost';
import PostDetailPage from './pages/PostDetail';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<BlogPostsPage />} />
            <Route path=":id" element={<PostDetailPage />} />
          </Route>
          <Route path="/blog/new" element={<NewPostPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
