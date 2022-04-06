import React from 'react'
import { productDetail } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

export const Detail = () => {

    const dispatch = useDispatch()
    const detail =  useSelector((state)=> state.productDetail)
    const id = useParams().id;

    useEffect(() => {
        dispatch(productDetail(id))
    }, [dispatch])
    

  return (
    <div>Detail</div>
  )
}
