import produceData from "../mockData/produce.json";


export default function produceReducer(preState = {}, action) {
    Object.freeze(preState);
    const nextState = {...preState};

    switch (action.type) {
        case POPULATE:
            action.produce.forEach(product => {
                nextState[product.id] = product
            })
            return nextState
            // return {...nextState}
        default:
            return nextState;
    }
}

const POPULATE = 'POPULATE';

export const populateProduce = produce =>{
    return {
            type: POPULATE,
            produce: produceData
        }

}

// store.dispatch({
//     type: POPULATE,
//     produce: produceData
// })

// store.dispatch(populateProduce())
