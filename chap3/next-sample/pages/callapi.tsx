import {useState, useEffect} from 'react';

function CallApi(){
    // 内部で状態を持つ
    const [data, setData] = useState({name:''});
    useEffect(() => {
        // pages/api/morino.tsの内容にりくえすと
        fetch('api/morino')
        .then((res) => res.json())
        .then((profile) => {
            setData(profile)
        })
    }, []);
    return <div>Hello {data.name}</div>
}

export default CallApi