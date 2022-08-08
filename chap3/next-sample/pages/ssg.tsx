import {GetStaticProps, NextPage, NextPageContext} from 'next';
import Head from 'next/head';

// ページコンポーネントのpropsの型定義
type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {
    const {message} = props;

    
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/climax.ico"></link>
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

// getStaticPropsはビルド時に実行される
export const getStaticProps: GetStaticProps<SSGProps> = async(context) => {
    const timestamp = new Date().toLocaleTimeString();
    const message = `${timestamp}にgetStaticPropsが実行されました`;
    console.log(message);
    return {
        props: {
            message,
        },
    }
}

export default SSG