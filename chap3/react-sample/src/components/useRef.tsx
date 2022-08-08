import Ract, {useState, useRef} from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

const ImageUploader = () => {
    // 隠されたinput要素にアクセスするためのref
    const inputImageRef = useRef<HTMLInputElement | null>(null)
    const fileRef = useRef<File | null>(null)
    const [message, setMessage] = useState<string | null>('')

    //画像をアップロードというテキストがクリックされたときのコールバック
    const onClickText = () => {
        if(inputImageRef.current !== null){
            // inputのdomにアクセスして、クリックイベントを発火する
            inputImageRef.current.click();
        }
    }
    // ファイルが選択された後に呼ばれるコールバック
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if(files !== null && files.length > 0){
            // fileRef.currentに値を保存する
            // fileReg.currentが変化しても再描画はしない
            fileRef.current = files[0];
        }
    }
    // アップロードボタンがクリックされたときに呼ばれるコールバック
    const onClickUpload = async() => {
        if(fileRef.current !== null){
            await sleep(UPLOAD_DELAY)
            setMessage(`${fileRef.current.name} has been successfully uploaded`)
        } 
    }

    return (
        <div>
            <p style = {{textDecoration: 'underline'}} onClick={onClickText}>
                画像をアップロード
            </p>
            <input
            ref={inputImageRef}
            type='file'
            accept="image/*"
            onChange={onChangeImage}
            style={{visibility:'visible'}}>
            </input>
            <br></br>
            <button onClick={onClickUpload}>アップロードする</button>
            {message !== null && <p>{message}</p>}
        </div>
    )
}

export default ImageUploader