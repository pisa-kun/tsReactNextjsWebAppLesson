import { NextPage } from 'next';
import Image from 'next/image';
// 画像ファイルのインポート
import Houkura from '../public/images/houkura.png';

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示した場合</p>
            <img src="/images/houkura.png"></img>
            <p>Imageコンポーネントで表示した場合</p>
            <Image src={Houkura}></Image>
            <p>Imageで表示した場合は事前に描画エリアが確保される</p>
        </div>
    )
}

export default ImageSample