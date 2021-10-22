import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
    counter
})

export type RootState = ReturnType<typeof rootReducer>
// rootReducer 타입 설정

export default rootReducer