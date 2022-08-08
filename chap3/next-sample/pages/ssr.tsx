import {GetServerSideProps, NextPage} from 'next';
import Head from 'next/head';

// ページコンポーネントのpropsの型定義
type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const {message} = props;

    
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/climax.ico"></link>
            </Head>
            <main>
                <p>
                    このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

// getStaticPropsはビルド時に実行される
export const getServerSideProps: GetServerSideProps<SSRProps> = async(context) => {
    const timestamp = new Date().toLocaleTimeString();
    const message = `${timestamp}にgetServerSidePropsが実行されました`;
    console.log(message);
    return {
        props: {
            message,
        },
    }
}

export default SSR