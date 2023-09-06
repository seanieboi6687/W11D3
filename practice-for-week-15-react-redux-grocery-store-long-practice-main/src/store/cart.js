
const ADDPRODUCE = 'ADDPRODUCE';

export default function cartReducer(preState={},action){
    Object.freeze(preState);
    const nextState = {...preState};
    switch(action.type){
        case ADDPRODUCE:
            nextState[action.produceID] = {id: action.produceID, count: 1};
            return nextState;
        default:
            return nextState;
    }
}

export const addItem = (produceID) => {
    return {
        type:ADDPRODUCE,
        produceID: produceID
    }
}
