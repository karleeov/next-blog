import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/Home.module.css';
import Hero from '../components/home-page/hero';
import FeaturePost from '../components/home-page/featured-posts';
import Layout from '../components/home-page/layout/layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <FeaturePost /> */}
    </Layout>
  );
}
