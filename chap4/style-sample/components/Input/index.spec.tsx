import {render, screen, RenderResult, fireEvent, getByRole} from '@testing-library/react';
import { Input } from './index';

// describeで処理をまとめる
describe(
    'Input', () => {
        let renderResult: RenderResult;

        beforeEach(() => {
            renderResult = render(<Input id = "username" label="Username"/>);
        });

        // テストケース実行後に描画していたコンポーネントを解放する
        afterEach(() => {
            renderResult.unmount();
        });

        //初描画時にinputy要素が空であることをテスト
        it('should empty in input on initial render', () => {
            const inputNode = screen.getByLabelText('Username') as HTMLInputElement

            // input要素が空であるか確認
            expect(inputNode).toHaveValue('');
        });

        //文字を入力したら、内容が表示されることのテスト
        it('should show input text', () => {
            const inputText = 'Text Input Text';
            const inputNode = screen.getByLabelText('Username') as HTMLInputElement

            // fireEventを使ってinput要素のonChangeイベントを発火
            fireEvent.change(inputNode, {target: {value: inputText}});
            // input要素が空であるか確認
            expect(inputNode).toHaveValue(inputText);
        });

        // ボタンが押されたら、入力テストがクリアするかチェック
        it('should reset when user clicks button', async() => {
            const inputText = 'Text Input Text';
            const inputNode = screen.getByLabelText('Username') as HTMLInputElement

            // fireEventを使ってinput要素のonChangeイベントを発火
            fireEvent.change(inputNode, {target: {value: inputText}});

            // ボタンを取得する
            const buttonNode = screen.getByRole('button', {
                name: 'Reset',
            }) as HTMLButtonElement;
            fireEvent.click(buttonNode);
            // input要素が空であるか確認
            expect(inputNode).toHaveValue('');
        });
    }
)