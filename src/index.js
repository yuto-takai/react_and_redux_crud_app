import React from 'react';
import ReactDOM from 'react-dom';
// reduxから提供されている、storeを作成するための関数
// applyMiddlewareは、redux-thunkのようなMiddlewareを適応するための関数
import { createStore, applyMiddleware } from 'redux';
// 作成したstoreを全コンポーネントにわたすための特殊なコンポーネント
import { Provider } from 'react-redux';
import reducer from './reducers'
import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

// 開発環境上でデバッグするためのツールを扱う場合は、
// composeWithDevtoolsでapplyMiddlewareをラップする￥
const enhancer = process.env.NODE_ENV === 'development' ?
composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
// すべてのstateがこのstoreに集約される
const store = createStore(reducer, enhancer)

// 全コンポーネントの元であるAppをProviderで包んで、store属性に、上で作成したstoreを渡すことで、
// 全コンポーネントでstoreを扱うことができる
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* exactはpath指定に完全にマッチする時につける */}
        <Route path='/events/new' component={EventsNew}/>
        <Route path='/events/:id' component={EventsShow}/>
        <Route exact path='/' component={EventsIndex}/>
        <Route exact path='/events' component={EventsIndex}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
