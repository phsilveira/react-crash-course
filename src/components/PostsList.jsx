import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Max" body="react is awesome"></Post>
      <Post author="Max" body="react is awesome"></Post>
    </ul>
  )
}

export default PostsList;