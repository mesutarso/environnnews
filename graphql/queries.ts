import { gql } from '@apollo/client';

export const GET_OPPORTUNITIES = gql`
	{
		posts(where: { categoryId: 34 }) {
			edges {
				node {
					title
					uri
					content
					seo {
						metaDesc
						metaKeywords
					}
				}
			}
		}
	}
`;

export const GET_NEWS = gql`
	{
		posts(where: { categoryId: 3 }, first: 100) {
			edges {
				node {
					title
					uri
					featuredImage {
						node {
							sourceUrl
						}
					}
					content
					id
				}
			}
		}
	}
`;

export const GET_PUBS = gql`
	{
		publicites {
			edges {
				node {
					title
					uri
					featuredImage {
						node {
							sourceUrl
						}
					}
				}
			}
		}
	}
`;

export const GET_BREAKING_NEWS = gql`
	{
		breakingNews {
			edges {
				node {
					title
					uri
				}
			}
		}
	}
`;

export const GET_POSTS = (name: string) => {
	return gql`
	{
		posts(where: { categoryName: "${name}" }, first: 20) {
			edges {
				node {
					date
					title
					uri
					content
					featuredImage {
						node {
							mediaItemUrl
						}
					}
				}
			}
		}
	}
`;
};

export const GET_POSTS_SLUG = (slug: string) => gql`
{
  post(id: "${slug}", idType: URI) {
    title
    content
    featuredImage {
      node {
        mediaItemUrl
        sourceUrl
        seo {
          metaKeywords
        }
      }
    }
    comments {
      edges {
        node {
          content
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
}
`;
