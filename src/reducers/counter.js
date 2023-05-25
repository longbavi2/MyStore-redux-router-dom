const Counter = (state = 0, action) => {
    switch (action.type) {
        case "UP":
            return state + action.value;
        default:
            return state;
    }
}
export default Counter;