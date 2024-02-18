import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MD from 'react-markdown'

import { useSinglePost } from '../../custom-hooks'
import { readableDate } from '../helpers'
import './SinglePost.less'

export default function SinglePost() {
  const { id } = useParams()
  const [post, isLoading] = useSinglePost(id)

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>

    return (
      <>
        <div className="post__intro">
          <h2 className="post__intro__title">{post.blogTitle}</h2>
      


        </div>

      
      </>
    )
  }

  return (
    <div className="post">
      <Link className="post__back" to="/">
        {'< Back'}
      </Link>

      {renderPost()}
    </div>
  )
}
