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

#### chapter4 add styled-components
> npm install --save styled-components  
> npm install --save-dev @types/styled-components  

**stroybookError**
[参考](https://dev.classmethod.jp/articles/tried-to-add-storybook-to-nextjs-project/)

```.storybook/main.js
"typescript" : { reactDocgen: false }, // add
```

**Actionを追加するとき**
stories/StyledButton.stories.tsx にプロパティを追加する
```tsx
export default{
    title: 'StyledButoon',
    component: StyledButton,
    argTypes: {onClick: {action: 'clicked'}},
} as ComponentMeta<typeof StyledButton>
```

**Reactにおけるテスト**
> npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

package.jsonにコマンド追加して  
> npm run test  

#### chapter5 develop environment
> npx create-next-app@latest --ts nextjs-gihyo-book  
> cd nextjs-gihyo-book  
> npm run dev

> npm install --save styled-components  
> npm install --save-dev @types/styled-components  

**esLintの設定**
- eslint-plugin-react@7.30.1
- eslint-plugin-react-hooks@4.6.0
- eslint@8.21.0
- eslint-plugin-import@2.26.0
- typescript-eslint@0.0.1-alpha.0
- eslint-plugin-prettier@4.2.1
- eslint-config-prettier@8.5.0
- prettier@2.7.1
- @typescript-eslint/parser@5.33.0
- @typescript-eslint/eslint-plugin@5.33.0

> npm install --save-dev prettier eslint typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import