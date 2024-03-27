import { useEffect } from "react";
import { itemsActions } from "../Store/itemSlice";
import { useDispatch } from "react-redux";



const FetchItems=({setLoading})=>{
      
      const dispatch=useDispatch();
      

      useEffect(()=>{
            const controller=new AbortController();
            const signal=controller.signal;

            fetch("http://localhost:8080/items",{signal})
                  .then((res)=>res.json())
                  .then(({items})=>{
                        dispatch(itemsActions.addInitialItems(items[0]));
                        setLoading(true);
                  })

            return ()=>{
                  controller.abort();
            }
      },[])

      return <></>

}
export default FetchItems;