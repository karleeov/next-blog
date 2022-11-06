import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkDown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
function PostContent(props) {
  const { post } = props;
  const imagePath = '/images/posts/${post.slug}/${post.image}';
  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={'/images/posts/${posts.slug}/${image.src}'}
    //       alt='image.alt'
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === 'image') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={'/images/posts/${posts.slug}/${image.src}'}
              alt='image.alt'
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighter style={atomDark} language={language} children={value} />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />

      <ReactMarkDown renderers={customRenderers}> {post.content}</ReactMarkDown>
    </article>
  );
}

export default PostContent;
