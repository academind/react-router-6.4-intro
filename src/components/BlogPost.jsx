import classes from './BlogPost.module.css';

function BlogPost({ title, text }) {
  return (
    <article className={classes.post}>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
}

export default BlogPost;
