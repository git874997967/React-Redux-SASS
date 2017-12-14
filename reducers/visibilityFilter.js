/*
* 是相应的抽象
* 是纯方法
* 传入旧的状态和action
* 返回新的状态
*
* */

//todo 筛选器的相应
const visibilityFilter=(state="SHOW_ALL",action)=>{
    switch (action.type){
        case "SET_VISIBILITY_FILTER": return action.visibilityFilter;
        default: return state;
    }
}

export  default  visibilityFilter;