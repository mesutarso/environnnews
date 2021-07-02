import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
//import { ServerStyleSheets } from '@material-ui/styles'; 

import { ServerStyleSheet } from 'styled-components';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

    render() {
        return (
            <Html lang="fr" prefix="og: http://ogp.me/ns#">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

// CustomDocument.getInitialProps = async (ctx) => {

//     const sheets = new ServerStyleSheets();
//     const originalRenderPage = ctx.renderPage;
  
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//       });
  
//     const initialProps = await Document.getInitialProps(ctx);
  
//     return {
//       ...initialProps,
//       styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
//     };
// };

export default CustomDocument;
