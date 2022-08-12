export type Category = 'shoes' | 'clothes' | 'book';
export type Condition = 'new' | 'used';

export type User = {
    id: number,
    username: string,
    displayName: string,
    email: string,
    profileImageUrl: string,
    description: string,
};

export type ApiContext = {
    apiRootUrl: string,
};

export type Product = {
    id: number,
    category: Category,
    title: string,
    condition: Condition,
    description: string,
    imageUrl: string,
    blurDataUrl: string,
    price: number,
    owner: User,
};
