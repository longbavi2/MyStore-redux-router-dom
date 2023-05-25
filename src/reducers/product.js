const product = (state = [], action) => {
    console.log(action)
    const NewState = [...state];
    switch (action.type) {
        case "PRODUCT_CART":
            const filter = state.some(item => item.id == action.id);
            if (filter) {
                const filter1 = state.find(item => item.id == action.id);
                filter1.quantity += action.quantity;
                const NewState__Up = [...state];
                return NewState__Up;
            } else {
                NewState.push({
                    id: action.id,
                    data: action.data,
                    quantity: action.quantity
                })
                return NewState;
            }
        case "PRODUCT_DELETE":
            const ADR = state.findIndex(item => item.id == action.id)
            state.splice(ADR, 1);
            const NewState__delete = [...state];
            return NewState__delete;

        case "PRODUCT_SUB":
            const filter_sub = state.find(item => item.id == action.id);
            if (filter_sub.quantity > 1) {
                filter_sub.quantity -= action.quantity;
                const NewState__sub = [...state];
                return NewState__sub;
            }
            else {
                return state;
            }

        case "PRODUCT_ADD":
            const filter_add = state.find(item => item.id == action.id);
            filter_add.quantity += action.quantity;
            const NewState__add = [...state];
            return NewState__add;
        default:
            return state;
    }

}
export default product;