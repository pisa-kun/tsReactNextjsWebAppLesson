import Reacgt from 'react'
type ContainerProps = {
    title: string;
    children: React.ReactElement
}

const Container = (props: ContainerProps): JSX.Element =>{
    const {title, children} = props;

    return (
        <div style={{background: '#b33e5c'}}>
            <span>
                {title}
                <div>{children}</div>
            </span>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return(
        <Container title = "Hello">
            <p>ここの部分が背景色で囲まれます</p>
        </Container>
    )
}

export default Parent