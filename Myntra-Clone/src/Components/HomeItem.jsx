import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../Store/bagSlice";

function HomeItem({ item }) {

      const dispatch = useDispatch();
      const bagItems = useSelector(store => store.bag);
      const elementFound = bagItems.indexOf(item.id) >= 0;

      const handleAddBag = () => {
            dispatch(bagActions.addToBag(item.id));
      }
      const RemoveFromBag = () => {
            dispatch(bagActions.removeFromBag(item.id));
      }

      return <>
            <div className="item-container">
                  <img className="item-image" src={item.image} alt="item image" />
                  <div className="rating">
                        {item.rating.stars} ⭐ {item.rating.count}
                  </div>
                  <div className="company-name">{item.company}</div>
                  <div className="item-name">{item.item_name}</div>
                  <div className="price">
                        <span className="current-price">Rs {item.current_price}</span>
                        <span className="original-price">Rs {item.original_price}</span>
                        <span className="discount">({item.discount_percentage}% OFF)</span>
                  </div>
                  {elementFound ? <button className=" btn-add-bag btn btn-danger" onClick={RemoveFromBag}>Remove From Bag</button> : <button className=" btn-add-bag btn btn-success" onClick={handleAddBag}>Add to Bag</button>}
            </div>
      </>
}
export default HomeItem;