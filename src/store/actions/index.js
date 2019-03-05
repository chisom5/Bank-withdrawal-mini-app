// action creators
export const withdrawal = (amount) => {
    return {
        type: "WITHDRAW_MONEY",
        payload: amount
    }
};
export const withdrawAll = () => {
    return {
        type: "WITHDRAW_ALL"
    }
}