import axios from "axios";

export function products() {
    return async function (dispatch) {
        try {
            let json = await axios('http://localhost:5000/api/products')
            dispatch({
                type: "GET-PRODUCTS",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function productDetail(id) {
    return async function (dispatch) {
        try {
            let json = await axios(`http://localhost:5000/api/products/${id}`)
            dispatch({
                type: "GET-DETAIL",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}