import Header from '../components/Header';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			{/*add style to the main layout container */}
			<div>{children}</div>
			<Footer />
		</div>
	);
}
