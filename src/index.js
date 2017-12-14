import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*  每个组件的css 和js 相互对应 */
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*这个是入口文件   */
ReactDOM.render(<App />, document.getElementById('root'));
/*这个方法不知道什么用途  对项目好像没有影响   先删除了*/
//registerServiceWorker();
