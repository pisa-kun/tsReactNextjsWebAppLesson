const Hello = () => {
    // click timing
    const onClick = () => {
        alert('Hello');
    }
    const text = 'Hello, React';

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

// 外部呼出し
export default Hello