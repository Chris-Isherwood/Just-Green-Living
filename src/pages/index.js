import * as React from 'react'
import { graphql } from 'gatsby'


const IndexPage = (props) => {
  const posts = props.data.allMongodbBlogPosts.edges;

  return (
    <div>
      {posts.map(post =>
      <div>
        <h1>{post.node.Category}</h1>
        <h4>{post.node.Author}</h4>
        <p>{post.node.Content}</p>
      </div>
      )}
    </div>
  )
}

export default IndexPage

export const posts = graphql `
query {
  allMongodbBlogPosts {
    edges {
      node {
        Author
        Category
        Content
      }
    }
  }
}
`