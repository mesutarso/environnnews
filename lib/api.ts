import axios from 'axios';

const API_URL = process.env.API_URL;

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

export const getPostsByCategory = async (categoryID: number, limit: number) => {
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
};

export async function getMenu(): Promise<any> {
	let data = JSON.stringify({
		query: `query getcategoriesforNav {
				menuItems(where: {location: PRIMARY}) {
					edges {
					node {
						label
					}
					}
				}
				}`,
		variables: {},
	});

	let config: object = {
		method: 'post',
		url: 'https://a1-environews.kinshasadigital.academy/index.php?graphql',
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	};

	const response = await axios(config);
	const dataFetch: any = await response.data;
	return dataFetch.data.menuItems;
}
