// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogData} = this.props
    const {id, title, imageUrl, topic, avatarUrl, author} = blogData
    return (
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="item-container">
          <img className="item-image" src={imageUrl} alt={`item${id}`} />

          <div className="item-info">
            <p className="item-topic">{topic}</p>

            <h1 className="item-title">{title}</h1>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
