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