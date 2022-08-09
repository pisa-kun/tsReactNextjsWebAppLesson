import { ComponentMeta } from '@storybook/react';
import { StyledButton } from '../components/StyledButton/index';
import { useState } from 'react';
import {action} from '@storybook/addon-actions';

export default{
    title: 'StyledButoon',
    component: StyledButton,
    //argTypes: {onClick: {action: 'clicked'}},
} as ComponentMeta<typeof StyledButton>

// incrementという名前でactionを出力するための関数
const incrementAction = action('increment');

export const Primary = (props :any) => {
    const [count, setCount ] = useState(0);
    const onClick = (e: React.MouseEvent) => {
        // 現在のカウントを渡してActionを呼ぶ
        incrementAction(0, count);
        setCount((c) => c + 1);
    }
    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Count: {count}
        </StyledButton>
    )
}

export const Success = (props :any) => {
    return (
        <StyledButton {...props} variant="success">
            Success
        </StyledButton>
    )
}

export const Transparent = (props :any) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}

export const Test = (props :any) => {
    return (
        <StyledButton {...props} variant="natsuha">
            Test
        </StyledButton>
    )
}