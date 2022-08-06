{
    const num: number = 100;
    console.log(num);
}

{
    type User = {
        name: string,
        age: number,
    };
    const user: User = {
        name: "morino",
        age: 16,
    };
    console.log(user);
}

{
    type User = {
        name: string,
        age: number,
    };
    const user: User = {
        name: "morino",
        age: 16,
    };

    function sayHello(user: User, greeting: string = 'Hello'): string{
        return `${greeting} ${user.name}`;
    }
    console.log(sayHello(user));
    console.log(sayHello(user, "Goddbye"));
}

{
    const genBirdInfo = (name: string): string[] => name.split(',');
    const singBirdInfo = (birdInfo: (x: string) => string[]): string => birdInfo('hato, kiji')[0] + "piyo piyo";
    console.log(singBirdInfo(genBirdInfo));
}