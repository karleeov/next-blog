import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import Hero from "../components/home-page/hero";
import Layout from "../components/home-page/layout/layout";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started",
    title: "get start nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "is for the blog showcase to use on nextjs for development demo and learning",
    date: "2022-10-20",
  },
];
export default function Home() {
  return (
    <Fragment>
      <Layout>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS} />
        {/* <FeaturePost /> */}
      </Layout>
    </Fragment>
  );
}
