const API_URL = 'https://a1-environews.kinshasadigital.academy/graphql';

async function fetchAPI(query: string, { variables }: any = {}) {
	const headers = { 'Content-Type': 'application/json' };

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}
	return json.data;
}

export async function getPostsByCategory(categoryID: number, limit: number) {
	const data = await fetchAPI(`
    {
  posts(first: 100, where: {orderby: {field: DATE, order: ASC}, categoryId: 5}) {
    edges {
      node {
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        uri
        seo {
          title
          metaDesc
          metaKeywords
        }
      }
    }
  }
}

  `);
	return data?.posts;
}
