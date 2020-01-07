import React from 'react'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const BasicPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {post.frontmatter.title}
                </h2>
                <HTMLContent className="content" content={post.html} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BasicPage;

export const basicPageQuery = graphql`
  query BasicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
