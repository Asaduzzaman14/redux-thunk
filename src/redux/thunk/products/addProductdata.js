import { postProduct } from "../../actions/productAction"

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()
        if (data.acknowledged) {
            dispatch(postProduct({
                _Id: data.insertedId,
                ...product,
            }))
        }
    }
}

export default addProductData