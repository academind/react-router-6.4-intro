import { Link } from 'react-router-dom';

import classes from './BlogActions.module.css';

function BlogActions() {
  return (
    <div className={classes.actions}>
      <Link className={classes.button} to="/blog/new">Add Post</Link>
    </div>
  );
}

export default BlogActions;
