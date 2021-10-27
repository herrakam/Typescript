import { combineReducers } from "redux";
import counter from "./counter";
import github from "./github";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos,
    github
})
export type RootState = ReturnType<typeof rootReducer>
// rootReducer 타입 설정

export default rootReducer