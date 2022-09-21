import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function submitHandler(event) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(event.target);
      const post = {
        title: formData.get('title'),
        body: formData.get('post-text'),
      };
      await savePost(post);
      navigate('/');
    } catch (err) {
      setError(err);
    }
    setIsSubmitting(false);
  }

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      {error && <p>{error.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        onSubmit={submitHandler}
        submitting={isSubmitting}
      />
    </>
  );
}

export default NewPostPage;

export async function action({ request }) {
  const data = await request.formData();

  const post = {
    title: data.get('title'),
    body: data.get('post-text'),
  };

  if (post.title.trim().length < 10 || post.body.trim().length < 10) {
    return { isError: true, message: 'Invalid input data provided.' };
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw response;
  }
  return redirect('/blog');
}
