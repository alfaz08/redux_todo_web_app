import {createSlice} from '@reduxjs/toolkit'

 const initialState ={
  tasks:[]
 }

const taskSlice = createSlice({
  name:'taskSlice',
  initialState,
  reducers:{
    addTask:(state,{payload})=>{
     if(state.tasks.length===0){
      state.tasks.push({id:1,status:'pending',...payload})
     }else{
      const lastElement =state.tasks.at(-1)
      state.tasks.push({id:lastElement.id+1,status:'pending',...payload})
     }
    }
  }
})

export const {addTask} =taskSlice.actions

export default taskSlice.reducer

