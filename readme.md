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
**react.js**
> npx create-react-app@latest react-sample --template typescript  
>cd react-sample  
>npm run start  

**next.js**
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

**storybookの設定**

> npx sb init

> npm install --save-dev @storybook/addon-postcss tsconfig-paths-webpack-plugin @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/plugin-proposal-private-property-in-object tsconfig-paths-webpack-plugin @mdx-js/react

> npm run storybook

**react hook Formの導入**

> npm install react-hook-form  

**SWRの導入**

> npm install swr

**react content Loaderの導入**

> npm install react-content-loader  
> npm install --save-dev @types/react-content-loader

**Material Iconの導入**

> npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

**npm ci**とは？

package-lock.jsonから依存関係をインストールする

**jsxで""を使う場合**
> Reactのjsx内にアプストロフィを含む文字列を記述しようとしたらESLintのエラー(eslintreact/no-unescaped-entities)に引っかかった。

[参考](https://qiita.com/Yuya2218/items/efbe2badb45d439012a4)

#### chapter6

**特定の行のルール(any無視)を無効化**

[ESLintのコメントでのルール制御](https://qiita.com/nju33/items/2d0cfea4fffbfdbff87a)

```ts
export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const res = await fetch(resource, init)
```

**keyof typeof の使い道**
[keyof typeofの使い方 [TypeScript]](https://qiita.com/ota-yuki/items/545999a5b5f8e6151244)
[keyof typeofでオブジェクトからキーだけを抜き出して型を生成する](https://zenn.dev/harryduck/articles/9d09b1c133f9cd)

```ts
const sampleObject = {
        aaa: 'AAA',
        bbb: 'BBB',
        ccc: 'CCC,'
    };

    type samplekeyType = keyof typeof sampleObject;

    const receivedStringValue = () => {
        const num = 1;
        if(num === 1){
            return 'aaa';
        }else if(num === 0){
            return 'bbb';
        }else{
            return 'ccc';
        }
    };
    
    // この場合は key "aaa" | "hhh" | "ccc" の型になる
    // const key: keyof typeof sampleObject = 'ddd';
    const key: keyof typeof sampleObject = receivedStringValue();
    const value = sampleObject[key];
    console.log(value);
```