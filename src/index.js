import React from 'react';
import ReactDOM from 'react-dom';
// reduxから提供されている、storeを作成するための関数
import { createStore } from 'redux';
// 作成したstoreを全コンポーネントにわたすための特殊なコンポーネント
import { Provider } from 'react-redux';
import reducer from './reducers'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// すべてのstateがこのstoreに集約される
const store = createStore(reducer)

// 全コンポーネントの元であるAppをProviderで包んで、store属性に、上で作成したstoreを渡すことで、
// 全コンポーネントでstoreを扱うことができる
ReactDOM.render(
  <Provider store='store'>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
