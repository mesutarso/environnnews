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
		author?: string;
	}[];
}
const Categorie = ({ posts }) => {
	console.log('Posts:', posts);
	const [articles, setArticles] = useState<IArticles['articles']>([
		{
			id: '1',
			image: '/assets/bird.jpg',
			category: 'climat',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Emmanuella Mulanga',
		},
		{
			id: '2',
			image: '/assets/bird.jpg',
			category: 'biodiversite',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequuntur perferendis tenetur vero laborum quia sequi ',
			author: 'Beni Map',
		},
		{
			id: '3',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Marcos Musafiri',
		},
		{
			id: '4',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Marcos Musafiri',
		},
		{
			id: '5',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Marcos Musafiri',
		},
		{
			id: '6',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Marcos Musafiri',
		},
		{
			id: '7',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Marcos Musafiri',
		},
		{
			id: '8',
			image: '/assets/bird.jpg',
			category: 'conservation',
			description:
				'Corrupti explicabo voluptates soluta asperiores? Tenetur magni molestias exercitationem alias, dignissimos quos earum recusandae?',
			author: 'Marcos Musafiri',
		},
	]);

	const articlesTwoLines = articles.filter((article) => +article.id <= 6);
	const articlesOneLine = articles.filter((article) => +article.id <= 4);
	const router = useRouter();
	const { name } = router.query;

	return (
		<div>
			<Banner
				titre={`${name}`}
				description='Félix Lilakako, "Eruption volcanique de Nyiragongo, au-delà de la réaction gouvernementale…une planification d’intervention urgente s’impose"'
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
			<LayoutArticle col1={12} articleCardSize={3} articles={articles} />
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
