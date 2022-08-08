import React, {useState, useEffect} from 'react';

const UPDATE_CTCLE = 1000;
const KEY_LOCALE = 'KEY_LOCALE';

enum Local {
    US = 'en-us',
    JP = 'ja-JP'
}

const getLocalFromString = (text: string) => {
    switch(text){
        case Local.US:
            return Local.US;
        case Local.JP:
            return Local.JP;
        default:
            return Local.US;
    }
}

export const Clock = () => {
    const [timeStamp, setTimestamp] = useState(new Date());
    const [locale, setLocale] = useState(Local.US);

    // タイマーのセットをするための副作用
    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CTCLE);

        // クリーンナップ関数を渡し、アンマウント時にタイマーの解除をする
        return () => {
            clearInterval(timer);
        }
        // 初回のみ実行
    }, []);

    // localstorageから値を読み込むための副作用
    useEffect(() => {
        const savedLocaale = localStorage.getItem(KEY_LOCALE);
        if (savedLocaale !== null){
            setLocale(getLocalFromString(savedLocaale));
        }
    }, []);

    // localが変化したときに、localstroage に値を保存するための副作用
    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale);
    }, [locale]);

    return(
        <div>
            <p>
                <span id = "current-time-label">現在時刻</span>
                <span>:{timeStamp.toLocaleString(locale)}</span>
                <select
                value={locale}
                onChange={(e) => setLocale(getLocalFromString(e.target.value))}>
                    <option value="en-us">en-US</option>
                    <option value="ja-JP">ja-JP</option>
                </select>
            </p>
        </div>
    )
}