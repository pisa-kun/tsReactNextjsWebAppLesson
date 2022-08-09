import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledButton } from '../components/StyledButton/index';
import { useState } from 'react';
import {action} from '@storybook/addon-actions';
import MDXDocument from './StyledButton.mdx';

export default{
    title: 'StyledButton',
    component: StyledButton,
    //argTypes: {onClick: {action: 'clicked'}},
    parameters: {
        docs:{
            page: MDXDocument,
        },
    },
    argTypes:{
        variant:{
            control: {type: 'radio'},
            options: ['primary', 'success', 'transparent', 'natsuha'],
        },
        children: {
            control: {type: 'text'},
        },
    },
} as ComponentMeta<typeof StyledButton>

// テンプレートコンポーネントを実装
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

// bindを呼び出しstoryを作成
export const TemplateTest = Template.bind({});

// デフォルトのpropsを設定する
TemplateTest.args = {
    variant: 'primary',
    children: 'primary',
}

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