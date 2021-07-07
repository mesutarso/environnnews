import Banner from '../../../components/Banner';
import { ArticleCard } from '../../../components/Articles';
import { useState } from 'react';
import PubliciteStyle from '../../../styles/Publicite.module.css';

export interface IArticles {
	articles: {
		id: string;
		image: string;
		category: string;
		description: string;
		author?: string;
	}[];
}
const Categorie: React.FC = () => {
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

	return (
		<div>
			<Banner
				titre='CONSERVATION'
				description='Félix Lilakako, "Eruption volcanique de Nyiragongo, au-delà de la réaction gouvernementale…une planification d’intervention urgente s’impose"'
			/>

			<div className='container'>
				<div className='row'>
					<div className='col-md-9'>
						<div className='row'>
							{articlesTwoLines.map((article) => (
								<ArticleCard
									key={article.id}
									article={article}
									size={4}
									imageHeight={250}
									imageWidth={380}
								/>
							))}
						</div>
					</div>
					<div className='col-md-3 mt-1'>
						<div className={PubliciteStyle.squeleton}></div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='row mb-3'>
							{articlesOneLine.map((article) => (
								<ArticleCard
									key={article.id}
									article={article}
									size={3}
									imageHeight={250}
									imageWidth={380}
								/>
							))}
						</div>
					</div>
					<div className='col-md-12'>
						<div className={PubliciteStyle.squeleton_hr}></div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='row justify-content-center mb-3'>
							{articles.map((article) => (
								<ArticleCard
									key={article.id}
									article={article}
									size={3}
									imageHeight={250}
									imageWidth={380}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Categorie;
