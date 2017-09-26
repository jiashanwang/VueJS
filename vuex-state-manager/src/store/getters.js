export default{
    count:(state)=>{
        return state.count
    },
    getodd:(state)=>{
        return state.count % 2==0?'偶数':'奇数'
    }
}
