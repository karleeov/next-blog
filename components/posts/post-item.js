import Link from 'next/link';
import Image from 'next/image';
import classes from './posts-item.module.css';
function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.posts;
  const formattedData = new Date(time).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = '/images/posts/${slug}/${image}';
  return (
    <li>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedData}}</time>
            <p>{excerpt} </p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
