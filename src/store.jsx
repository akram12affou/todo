import { v4 as uuidv4 } from 'uuid';
let todos = [
    {
        id:uuidv4(),
        name:'akram'
    }
]
function reducer(state = todos, { type, payload }){
  switch (type) {
  case 'add':
    return [...state,{ id:uuidv4(),name:payload}]
   case 'delete':
    return state.filter(e => e.id !== payload)
    case 'edit':
        let newState =[]
        for(let i=0;state.length>i;i++){
            if(state[i].id == payload.id){
                console.log(state[i].name)
                newState.push({
                    id:state[i].id,
                    name:payload.name
                })
            }else{
                newState.push({
                    id:state[i].id,
                    name:state[i].name
                })
            }
        }
    return newState
  default:
    return state
  }
}
export default reducer
