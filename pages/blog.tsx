import React from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Post from '../components/Post';
import { NextPage } from 'next'

export interface Props {
  posts: [
    {
      id: any,
      src: any,
      title: any,
      text: any,
      date: any,
    }
  ];
}

const Blog: NextPage<Props> = ({ posts }) => (
  <Layout>
    <h1>Posts in Blog</h1>
    <ul>
      {posts.map(post => (
        <Post post={post} />
      ))}
    </ul>
  </Layout>
)

const getInitialProps = async () => {
  const response = await fetch(`https://upply-interview.herokuapp.com/`)
  const result = await response.json();

  return {
    posts: result.sort((a, b) => (a.date > b.date) ? 1 : -1)
  }
}

Blog.getInitialProps = getInitialProps

export default Blog

