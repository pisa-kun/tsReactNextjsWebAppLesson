import {render, screen, RenderResult, fireEvent } from '@testing-library/react';
import { DelayInput } from './index';

// DelayInputコンポーネントに関するテスト
describe('DelayInput', () => {
    let renderResult: RenderResult;
    let handleChange: jest.Mock;

    beforeEach(() => {
        // モック関数を作成する
        handleChange = jest.fn();

        // モック関数をDelayButtonに渡して描画
        renderResult = render(<DelayInput onChange={handleChange} />);
    });

    afterEach(() => {
        renderResult.unmount();
    });
    // span要素のテキストが空であることをテスト
    it('should display empty in span on initial render', () => {
        const spanNodee = screen.getByTestId('display-text') as HTMLSpanElement;

        // 初期表示は空
        expect(spanNodee).toHaveTextContent('入力したテキスト');
    });

    it('should display 「入力中...」 immediately after onChange event occurs', () => {
        const inpuText = 'Test Input Text';
        const inputNode = screen.getByTestId('input-text') as HTMLSpanElement;

        // inputのonChangeイベントを呼び出す
        fireEvent.change(inputNode, {target: {value: inpuText}});
        // 初期表示は空
        const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;
        expect(spanNode).toHaveTextContent('入力中...');
    });
});