
const ADDPRODUCE = 'ADDPRODUCE';

export default function cartReducer(preState={},action){
    Object.freeze(preState);
    const nextState = {...preState};
    switch(action.type){
        case ADDPRODUCE:
            nextState[action.item.id] = {id:action.item.id, count:action.item.count+1};

        default:
            return nextState;
    }
}

export const addItem = (item, count=0) =>{
    const id = item.id;
    return {
        type:ADDPRODUCE,
        item:{
            id,
            count
        }
    }
}
