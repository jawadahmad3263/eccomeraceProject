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
const quantityPlus = (id) => {
    console.log("here plus");
    return {
        type: 'QUANTITY_PLUS',
        payload: id,
    }
}
const quantityMinus = (id) => {
    console.log("here minus");
    return {
        type: 'QUANTITY_MINUS',
        payload: id,
    }
}
export default{
    Add,
    Delete,
    quantityPlus,
    quantityMinus
}
