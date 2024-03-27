import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import { bagActions } from "../Store/bagSlice";

function BagSummary({ setVisible }) {

      const dispatch = useDispatch();

      const bagItemsId = useSelector(store => store.bag);
      const items = useSelector(store => store.items);

      const finalItems = items.filter(item => {
            const itemIndex = bagItemsId.indexOf(item.id);
            return itemIndex >= 0;
      })

      let CONVENIENCE_FEES = 0;
      const totalItem = bagItemsId.length;
      let totalMRP = 0;
      let totalDiscount = 0;
      finalItems.forEach(item => {
            totalMRP += item.original_price;
            totalDiscount += item.original_price - item.current_price;
      })
      if(totalMRP<5000 && totalItem>0){ 
            CONVENIENCE_FEES=99;
      }
      const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

      const orderPlaced = () => {
            dispatch(bagActions.emptyBag());
            setVisible(true);
      }




      return <div className="bag-summary mt-5">
            <div className="bag-details-container">
                  <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
                  <div className="price-item">
                        <span className="price-item-tag">Total MRP</span>
                        <span className="price-item-value">₹{totalMRP}</span>
                  </div>
                  <div className="price-item">
                        <span className="price-item-tag">Discount on MRP</span>
                        <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                  </div>
                  <div className="price-item">
                        <span className="price-item-tag">Convenience Fee</span>
                        <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
                  </div>
                   {totalMRP<5000 ? <center className="bg-warning rounded">Add More <b>{5000-totalMRP}</b> amount of item to remove convenience fees</center> : <></>}
                  <hr />
                  <div className="price-footer">
                        <span className="price-item-tag">Total Amount</span>
                        <span className="price-item-value">₹{finalPayment}</span>
                  </div>
            </div>
            {totalItem == 0 ?
                  <button className="btn-place-order bg-secondary">
                        <div className="css-xjhrni">PLACE ORDER</div>
                  </button> :
                  <button className="btn-place-order">
                        <div onClick={orderPlaced} className="css-xjhrni">PLACE ORDER</div>
                  </button>
            }
      
      </div>
}
export default BagSummary;