/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const headingAccentStyles = {
  color: '#663399'
};
const paragraphStyles = {
  marginBottom: 48
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%'
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25
};

const docLink = {
  text: 'TypeScript Documentation',
  url: 'https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/',
  color: '#8954A8'
};

const badgeStyle = {
  color: '#fff',
  backgroundColor: '#088413',
  border: '1px solid #088413',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1
};

const pdfComponents = data => {
  console.log(data);
  if (data) {
    return data.allPdf.edges.map(d => (
      <div key={d.node.id}>
        <h2 style={docLink}>Filename: {d.node.parent.name}</h2>
        <span key={d.node.id} style={descriptionStyle}>
          {d.node.content}
        </span>{' '}
        <hr />
      </div>
    ));
  }
};

const ReleaseNotesPdf = ({ data }) => {
  const content = pdfComponents(data);
  return (
    <>
      <h1 style={headingAccentStyles}>Release notes PDF</h1>
      {content}
    </>
  );
};

export const query = graphql`
  {
    allPdf {
      edges {
        node {
          id
          content
          parent {
            id
            ... on File {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export default ReleaseNotesPdf;
// export default () => {
//   <span>Hello world</span>;
// };
