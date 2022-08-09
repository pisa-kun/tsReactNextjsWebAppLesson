import styled, {css} from 'styled-components';

const variants = {
    primary: {
        color: '#ffffff',
        backgroundColor: '#b33e5c',
        border: 'none',
    },
    success: {
        color: '#ffffff',
        backgroundColor: '#ffc602',
        border: 'none',
    },
    transparent: {
        color: '#ffffff',
        backgroundColor: '#89c3eb',
        border: '1px solid black',
    },
    natsuha: {
        color: '#000000',
        backgroundColor: '#90e667',
        border: 'none',
    },
} as const

type StyledButtonProps = {
    variant: keyof typeof variants
}

export const StyledButton = styled.button<StyledButtonProps>`
${({variant}) => {
    const style = variants[variant];

    return css`
    color: ${style.color};
    background-color: ${style.backgroundColor};
    border: ${style.border};
    `;
}}

border-radius: 12px;
font-size: 14px;
height: 38px;
line-height: 22px;
letter-spacing: 0;
cursor: pointer;
&:focus{
    outline: none;
}
`