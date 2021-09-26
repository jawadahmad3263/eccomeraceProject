const Add = (item) => {
    console.log("in add action",item)
    return {
        type: 'ADD_ITEM',
        payload: item,
    }
}

const Delete = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id,
    }
}
export default{
    Add,
    Delete
}
