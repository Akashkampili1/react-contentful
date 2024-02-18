import React from 'react'
import { Link } from 'react-router-dom'

import { usePosts } from '../../custom-hooks/'
import { readableDate } from '../helpers'
import './Posts.less'

export default function Posts() {
  const [posts, isLoading] = usePosts()

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>

    return posts.map(post => (
      <Link
        className="posts__post"
        key={post.fields.urlSlug}
        to={post.fields.urlSlug}
      >

        <h3>{post.fields.blogTitle}</h3>

      </Link>
    ))
  }

  return (
    <div className="posts__container">
      <h2>Articles</h2>

      <div className="posts">{renderPosts()}</div>
    </div>
  )
}
