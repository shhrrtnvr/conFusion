import {COMMENTS} from "../shared/comments";
import * as Actiontypes from "./Actiontypes"

export const Comments = (state=COMMENTS, action) => {
    switch (action.type) {
        case Actiontypes.ADD_COMMENT:
            return state.concat({
                ...action.payload,
                id : state.length,
                date : new Date().toISOString()
            })
        default:
            return state
    }
}