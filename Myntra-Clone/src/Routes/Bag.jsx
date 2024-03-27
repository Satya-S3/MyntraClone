import { Link } from "react-router-dom";
import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";
import { useSelector } from "react-redux";
import { useState } from "react";

function Bag() {

      const bagItemId = useSelector(store => store.bag);
      const items = useSelector(store => store.items);

      const finalItems = items.filter(item => {
            const itemIndex = bagItemId.indexOf(item.id);
            return itemIndex >= 0;
      })

      let [visible, setVisible] = useState(false);

      return <>
            <main>
                  <div className="bag-page">
                        <div className="bag-items-container">
                              {finalItems.map(item => <BagItem key={item.id} item={item} />)}
                        </div>
                        <BagSummary setVisible={setVisible} />
                        {visible &&
                              <div className="modal-content rounded-4 shadow modal">
                                    <center className="modal-body p-5">
                                          <h2 className="fw-bold mb-0">🎉 Order Has Been Placed 🎉</h2>
                                          <Link to="/"><button type="button" className="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Back To Menu</button></Link>
                                    </center>
                              </div>
                        }
                  </div>
            </main>
      </>
}
export default Bag;