import React, { useState, useCallback, useRef } from 'react';

type DelayButtonProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const DelayInput = (props: DelayButtonProps) => {
    const {onChange} = props;

    // 入力中かどうかを保持する状態
    const [isTyping, setIsTyping] = useState(false);
    // inputに表示するテキストを保持する状態
    const [inputValue, setInputValue ] = useState('');
    // spanに表示するテキストを保持する状態
    const [viewValue, setViewValue] = useState('');
    // タイマーを保持するRef
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        // 入力中のフラグをセットする
        setIsTyping(true);

        // inputに表示するテキストを更新する
        setInputValue(e.target.value);

        if(timerRef.current !== null){
            clearTimeout(timerRef.current)
        }

        // 1秒後に実行するタイマーをセットする
        timerRef.current = setTimeout(() => {
            timerRef.current = null;
            // 入力中のフラグを解除する
            setIsTyping(false);
            setViewValue(e.target.value);
            onChange(e); 
            }, 1000);
    }, [onChange]);

    // spanに表示するテキスト
    const text = isTyping ? '入力中...' : `入力したテキスト: ${viewValue}`;

    return (
        <div>
            <input data-testid="input-text" value={inputValue} onChange={handleChange} />
            <span data-testid="display-text">{text}</span>
        </div>
    )
}