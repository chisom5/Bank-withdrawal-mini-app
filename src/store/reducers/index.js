// reducers
const rootReducer = (state, action) => {
    switch (action.type) {
        case "WITHDRAW_MONEY":
            return {
                ...state,
                balance: state.balance - action.payload
            };
        case "WITHDRAW_ALL":
            return {
                ...state,
                balance: 0
            }
        default:
            return state;
    }
}
export default rootReducer;