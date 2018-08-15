
const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FLIGHT':
            return state.concat([action.data]);
        case 'DELETE_FLIGHT':
            return state.filter((flight)=>flight.number !== action.number);
        default:
            return state;
    }
}
export default postReducer;