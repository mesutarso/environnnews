import articleStyles from '../styles/Article.module.css';

export interface IComments {
	comments: {
		id: string;
		pseudo: string;
		description: string;
		date: string;
	}[];
}
const Comments: React.FC<IComments> = ({ comments }) => {
	const renderComment = (): JSX.Element[] => {
		return comments.map((comment) => (
			<div key={comment.id} className={articleStyles.comment}>
				<h6 data-testid='pseudo'>{comment.pseudo}</h6>
				<p data-testid='description'>{comment.description}</p>
				<span data-testid='comment-date'>{comment.date}</span>
			</div>
		));
	};

	return <div className={articleStyles.divider}>{renderComment()}</div>;
};

export default Comments;
