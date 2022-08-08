import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from "./components/Message";
import ContainerSample from "./components/ContainerSample";
import Page from "./components/ContenxtSample";
// import Counter from "./components/useState";
import Counter from "./components/useReducer";
import Parent from "./components/Parent";
import UseMemoSample  from './components/UseMemoSample';
import { Clock } from './components/Clock';
import ParentContext from './components/useComponent';
import ImageUploader from './components/useRef';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello></Hello>
    <Name></Name>
    <Message></Message>
    <ContainerSample></ContainerSample>
    <Page></Page>
    <Counter initialValue={1}></Counter>
    <Parent></Parent>
    <UseMemoSample></UseMemoSample>
    <Clock></Clock>
    <ParentContext></ParentContext>
    <ImageUploader></ImageUploader>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
