// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const formattedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      author: data.author,
      topic: data.topic,
    }
    this.setState({blogData: formattedData})
  }

  render() {
    const {blogData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogData
    return (
      <div className="blog-container">
        <div className="blogs-info">
          <h2 className="blog-details-title">{title}</h2>
          <div className="author-details">
            <img className="author-pic" src={avatarUrl} alt={author} />
            <p className="details-author-name">{author}</p>
          </div>
          <img src={imageUrl} className="blog-image" alt={title} />
          <p className="blog-content">{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
