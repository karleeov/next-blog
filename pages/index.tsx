import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/Home.module.css';
import Hero from '../components/home-page/hero';
import Layout from '../components/home-page/layout/layout';
import FeaturedPosts from '../components/home-page/featured-posts';

import { getFeaturedPosts } from '../lib/post-util';

const DUMMY_POSTS = [
  {
    slug: 'getting-started',
    title: 'get start nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'is for the blog showcase to use on nextjs for development demo and learning',
    date: '2022-10-20',
  },
  {
    slug: 'getting-started',
    title: 'get start nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'is for the blog showcase to use on nextjs for development demo and learning',
    date: '2022-10-20',
  },
  {
    slug: 'getting-started',
    title: 'get start nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'is for the blog showcase to use on nextjs for development demo and learning',
    date: '2022-10-20',
  },
  {
    slug: 'getting-started',
    title: 'get start nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'is for the blog showcase to use on nextjs for development demo and learning',
    date: '2022-10-20',
  },
];
export default function HomePage(props) {
  return (
    <Fragment>
      <Layout>
        <Hero />
        <FeaturedPosts posts={props.posts} />
        {/* <FeaturePost /> */}
      </Layout>
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
