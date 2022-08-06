import React from 'react';

const TitleContext = React.createContext('');

const Title = () => {
    // consumerを使って参照
    return (
        <TitleContext.Consumer>
            {
                (title) =>{
                    return <h1>{title}</h1>
                }
            }
        </TitleContext.Consumer>
    )
}

const Header = () =>{
    return (
        <div>
            <Title></Title>
        </div>
    )
}

const Page = () =>{
    const title = 'React Book';

    // providerでset
    return (
        <TitleContext.Provider value={title}>
            <Header></Header>
        </TitleContext.Provider>
    )
}

export default Page