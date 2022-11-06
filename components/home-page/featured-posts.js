import Link from "next/link";
import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Feature post</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
export default FeaturedPosts;
