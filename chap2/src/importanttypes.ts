{
    enum Direction {
        'Up',
        'Down',
        'Left',
        'Right'
    };
    console.log(Direction.Left);
}

{
    class Queue<T>{
        private array: T[] = [];

        push(item: T){
            this.array.push(item);
        }

        pop(): T | undefined{
            return this.array.shift();
        }
    }
    const queue = new Queue<number>();
    queue.push(11);
    queue.push(12);
    console.log(queue.pop());
}