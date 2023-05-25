import {combineReducers} from "redux"
import Counter from "./counter";
import product from "./product";
const allreducers = combineReducers({
    Counter,
    product,
})
   
export default allreducers;