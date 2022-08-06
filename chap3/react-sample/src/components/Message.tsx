// コンポーネントに外部から値を代入する props
const Text = (props: {content: string}) => {
    const {content} = props
    return <p className="text">{content}</p>
}

const Message = (props: {}) => {
    const content1 = 'This is parent component';
    const content2 = 'Message uses Text component';

    return(
        <div>
            <Text content={content1}></Text>
            <Text content={content2}></Text>
        </div>
    )
}

export default Message;