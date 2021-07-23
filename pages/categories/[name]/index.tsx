import Banner from '../../../components/Banner';
import LayoutArticle from '../../../components/LayoutArticle';
import { useState } from 'react';
import { ArticleCard } from '../../../components/Articles';
import { useRouter } from 'next/router';
import client from '../../../graphql/uri';
import { GET_POSTS } from '../../../graphql/queries';

export interface IArticles {
	articles: {
		id: string;
		image: string;
		category: string;
		description: string;
		slug: string;
		author?: string;
		node?: any;
	}[];
}
const Categorie = ({ posts }) => {
	const [articles, setArticles] = useState<IArticles['articles']>(posts);

	const articlesTwoLines = articles
		.filter((article, key) => key < 7)
		.slice(1, 7);
	const articlesOneLine = articles.filter(
		(article, key) => key >= 6 && key < 10
	);
	const articlesBottom = articles.filter(
		(article, key) => key >= 10 && key < 18
	);
	const router = useRouter();
	const { name } = router.query;
	let postImgCat =
		(articles[0].node.featuredImage !== null
			? articles[0].node.featuredImage.node.mediaItemUrl
			: '/assets/not_found.jpg') ||
		articles[0].node.featuredImage.node.sourceUrl;
	return (
		<div>
			<Banner
				titre={`${name}`}
				description={articles[0].node.title}
				imageLink={postImgCat}
			/>
			<LayoutArticle
				col1={9}
				col2={3}
				articleCardSize={4}
				articles={articlesTwoLines}
			/>

			<LayoutArticle
				col1={12}
				col2={12}
				articleCardSize={3}
				articles={articlesOneLine}
			/>
			<LayoutArticle col1={12} articleCardSize={3} articles={articlesBottom} />
		</div>
	);
};

export default Categorie;

export async function getServerSideProps(context) {
	const name: string = context.params.name;
	const posts = await client.query({ query: GET_POSTS(name) });

	return {
		props: {
			posts: posts.data.posts.edges,
		},
	};
}
