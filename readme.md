### typescript react/next.js webApp

[書籍](https://gihyo.jp/book/2022/978-4-297-12916-3)の練習レポジトリ

#### install procedure

> npm init --yes
> npm install --save/dev typescript @types/node
> npx tsc --init
---

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "esnext",
    "sourceMap": true,
    "moduleResolution": "node",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "./src/**/*.ts"
  ],
}

```
#### package.json
**"type":"module"** が必要
```json
{
  "name": "chap7",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^17.0.31",
    "typescript": "^4.6.4"
 }
}
```

#### chapter3 add react
> npx create-react-app@latest react-sample --template typescript  
>cd react-sample  
>npm run start  

> npx create-next-app@latest --ts next-sample  
>cd next-sample  
>npm run start  

or

> npm run build  
> num run start

- 以下のようなエラーがでたとき
>Error: listen EADDRINUSE: address already in use 0.0.0.0:3000

ポートを使っているので、サーバーを落とす

#### chapter3 add styled-components
> npm install --save styled-components  
> npm install --save-dev @types/styled-components  