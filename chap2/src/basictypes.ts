{
    const names = ["komiya", "sonoda", "saijyo", "morino", "arisugawa"];
    names.forEach(name => {
        console.log(name.toUpperCase());
    });
}

{
    type Point = {
        x: number,
        y: number,
    };

    function PrintPoint(point: Point) {
        console.log(`座標xは${point.x}`);
        console.log(`座標yは${point.y}`);
    }
    const point1 = {x: 3, y: 4};
    const point728 = {x: 72, y: 8};
    
    PrintPoint(point1);
    PrintPoint(point728);
}

{
    interface Colorful{
        color: string
    }

    interface Circle{
        radius: number
    }

    interface ColorfulCircle extends Colorful, Circle{}

    const cc: ColorfulCircle = {
        color: 'red',
        radius : 1,
    }
    console.log(cc);
}

{
    interface IUser{
        name: string;
        age: number;

        sayHello: () => string;
    }

    class User implements IUser{

        constructor(public name: string, public age: number){
            this.name = name;
            this.age = age;
        }
        sayHello(): string{
            return `I am ${this.name}, Hello`;
        }
    }
    const user = new User(`morino`, 16);
    console.log(user.sayHello());
}