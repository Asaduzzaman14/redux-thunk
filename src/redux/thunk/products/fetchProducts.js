import { lodeProduct } from "../../actions/productAction"

const lodeProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/products")
        const data = await res.json()

        if (data.data.length) {
            dispatch(lodeProduct(data.data))
        }

    }
}
export default lodeProductData;