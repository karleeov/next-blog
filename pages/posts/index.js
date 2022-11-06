import AllPost from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';
function AllPostsPage() {
  return <AllPost posts={DUMMY_POSTS} />;
}

export function getStaticProps(props) {
  const allPosts = getAllPosts(props.posts);

  return {
    props: {
      posts: allPosts,
    },
  };
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
