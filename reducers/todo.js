/*
* 是相应的抽象
* 是纯方法
* 传入旧的状态和action
* 返回新的状态
*
* */

//todo 描绘 待办项 的状态
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                /* 新添加的代办事项  没有完成*/
                completed: false
            };
            /*个人我认为  这个地方 是强制使用assign 可以不用  因为toggle 只是  改变completed  其他的没有变
            所以只是单独修改 complete 取反就好  以后测试 */
        case 'TOGGLE_TODO': /*return{
             id:action.id,
             text:action.text,
             completed:!action.completed

         }*/
            /*点击的不是 这个待办项  其他原样返回   */
            if (state.id !==action.id) {
                return state;
            }
            return Object.assign({}, state, {
                /*                 completed:!action.completed*/
                completed: !state.completed
            });
        /* case 'SET_VISIBILITY':
             return {
                 id: action.id,
                 text: action.text,
                 completed: action.completed
             }*/
        /*原样返回*/
        default:
            return state;
    }
};
// state 是一個數組
const todos = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            /* [...state, xxx] 想当与  数组的append 方法  */
            return [...state,
                todo(undefined, action)];
        case 'TOGGLE_TODO':
            /* 将每一个待办项 都交给todo 处理  用map  实现 遍历 return state finally but the value inside already processed */
            return state.map(t=>todo(t,action));
        default:
            return state;
    }
};


export default  todos