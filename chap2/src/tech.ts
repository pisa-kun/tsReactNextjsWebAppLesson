{
    interface User{
        name: string
        social?:{
            facebook: boolean
            twitter: boolean
        }
    }

    let user: User
    user = {name: 'morino', social: {facebook: true, twitter: true}}
    console.log(user.social?.facebook);

    user = {name: 'saijyo'};
    console.log(user.social?.facebook);
}

{
    function addOne(value: number | string){
        if(typeof value === 'string'){
            return Number(value) + 1;
        }
        return value + 1;
    }
    console.log(addOne(10));
    console.log(addOne("728"));
}