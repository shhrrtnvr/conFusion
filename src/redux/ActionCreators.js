import * as Actiontype from "./Actiontypes"

export const CommentAction = ( dishId, author, rating, comment) => ({
    type : Actiontype.ADD_COMMENT,
    payload : {
        dishId : dishId,
        author : author,
        rating : rating,
        comment : comment
    }
})