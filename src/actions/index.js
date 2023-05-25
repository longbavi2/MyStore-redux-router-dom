export const up=(value)=>{
    return {
        type:"UP",
        value:value
    }
}
export const down=(value)=>{
    return {
        type:"DOWN",
        value:value
    }
}
export const ProductCart = (id,item)=>{
    return {
        id:id,
        type:"PRODUCT_CART",
        data :item,
        quantity:1
    }
}
export const ProductDelete = (id)=>{
    return {
        id:id,
        type:"PRODUCT_DELETE",
    }
}
export const ProductSub = (id)=>{
    return {
        id:id,
        type:"PRODUCT_SUB",
        quantity:1
    }
}
export const ProductAdd = (id)=>{
    return {
        id:id,
        type:"PRODUCT_ADD",
        quantity:1
    }
}