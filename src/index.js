import React from 'react';
import ReactDOM from 'react-dom';
import   './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
/*  每个组件的css 和js 相互对应 */
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
/*这个是入口文件   */
  
/*这个方法不知道什么用途  对项目好像没有影响   先删除了*/
//registerServiceWorker();
//let store=createStore(todoApp)
ReactDOM.render(
		//<Provider store={store}>
	<App />
//</Provider>
	, document.getElementById('root'));