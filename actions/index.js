/*用户的那些行为需要被抽象
只有三个行为
*输入 addTodo
* 代办完成的切换 toggleTodo
* 状态的检查 filter
* */
let nextTodoId=0;
export const addTodo=(text)=>{
        return {
                type:'ADD_TODO',
                id:nextTodoId++,
                text
    }
};
export const  setVisibility=(filter)=>{
    return{
        type:"SET_VISIBILITY",
        filter
    }
};
export  const  toggleTodo=(id)=>{
    return {
            type:"TOGGLE_TODO",
            id
    }
};