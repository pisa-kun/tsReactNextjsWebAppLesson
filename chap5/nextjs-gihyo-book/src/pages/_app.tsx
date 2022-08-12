import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding:0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
 
}

* {
  box-sizing: border-box;
}

a {
  cursor: pointer;
  text-decoration:none;
  transition: .25px;
  color: #000;
}

ol, ul{
  list-style: none;
}
`;
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta key="charset" name="charset" content="utf-8"></meta>
                <meta
                    key="viewport"
                    name="viewport"
                    content="width=device-width, initial-scal=1, shrink-to-fit=no, maximum-scale=5"
                />
                <meta property="og:locale" content="ja_JP" />
                <meta property="og:type" content="website" />
            </Head>
            <GlobalStyle></GlobalStyle>
            <Component {...pageProps}></Component>
        </>
    );
};

export default MyApp;
