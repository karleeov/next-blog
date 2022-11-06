import classes from './all-post.module.css';
import PostGrid from './posts-grid';
import PostsGrid from './posts-grid';

function AllPost(props) {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
export default AllPost;
