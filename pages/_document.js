import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				></link>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
