import Document, { Html, NextScript, Head, Main } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<>
				<Html lang='fr'>
					<Head />
					<body>
						<Main />
						<NextScript />
					</body>
				</Html>
			</>
		);
	}
}

export default MyDocument;
