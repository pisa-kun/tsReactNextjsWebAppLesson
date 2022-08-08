import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';

type ISRProps = {
    message: string
}

const ISR: NextPage<ISRProps> = (props) => {
    const {message} = props;
    const router = useRouter()

    if(router.isFallback){
        // フォールバックページ向けの表示を返す
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/climax.ico"></link>
            </Head>
            <main>
                <p>
                    このページはISRによってビルド時に生成されたページです
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ISRProps> = async(context) => {
    const timestamp = new Date().toLocaleTimeString();
    const message = `${timestamp}にgetServerSidePropsが実行されました`;
    console.log(message);
    return {
        props: {
            message,
        },
        // 有効時間
        revalidate: 60,
    }
}
export default ISR;