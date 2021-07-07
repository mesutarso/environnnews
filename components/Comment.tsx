import { IComments } from '../pages/articles/[id]';
import articleStyles from '../styles/Article.module.css';

const Comments: React.FC<IComments> = ({ comments }) => {
	const renderComment = (): JSX.Element[] => {
		return comments.map((comment) => (
			<div key={comment.id}>
				<h6>{comment.pseudo}</h6>
				<p>{comment.description}</p>
				<span>{comment.date}</span>
			</div>
		));
	};

	return <div className={articleStyles.divider}>{renderComment()}</div>;
};

export default Comments;
