import axios from "axios";


const { REACT_APP_API_BACKEND_URL } = process.env

export function products() {
    return async function (dispatch) {
        try {
            
            let json = await axios(`${REACT_APP_API_BACKEND_URL}/api/products`)
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
            let json = await axios(`${REACT_APP_API_BACKEND_URL}/api/products/${id}`)
            dispatch({
                type: "GET-DETAIL",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
